const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('*Sesi Soal Itu Sudah Berakhir*')
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', 'Bantu', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].exp += this.asahotak[id][2]
            await this.sendButton(m.chat, `๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐ป ๐๐๐ก๐๐ฅโญ \n๐Prize +${this.asahotak[id][2]} XP`, 'โฆสแดษด-สแดแด', '๐๐๐๐ ๐๐๐๐๐', '.asahotak', m)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Jawaban HAMPIR BENAR*`)
        else m.reply(`๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐ป ๐ฆ๐๐๐๐โ`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
