let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `*Tidak Ada Absen Berlangsung Digrup Ini!*\n\n${usedPrefix}mulaiabsen - Untuk Memulai Absen`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*โ๏ธKamu Sudah Absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `โโช ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.send2Button(m.chat, `
๐ Tanggal: ${date}
${conn.absen[id][2]}

โญโโโ[ ๐๐๐ฆ๐ง ]
โ Total: ${absen.length}
${list}
โฐโโโโโโโยทยทยทยทยทโโโโโโ
`,datebot + '\n' + wm, '๐๐๐๐๐', '.absen', '๐๐๐ ๐๐๐๐๐', '.cekabsen', m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
handler.register = true
let wm = global.botwm
let datebot = global.botdate