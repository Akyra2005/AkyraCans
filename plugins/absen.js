let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak Ada Absen Berlangsung!`, 'ππππππ π±πΎπ', 'πππππ', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*βοΈKamu Sudah Absen*!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `β ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
π Tanggal: ${date}
${conn.absen[id][2]}
βγ daftar absen γ
β Total: *${absen.length}*
${list}
β°ββββ`.trim()
    await conn.send2Button(m.chat, caption, wm, 'πππππ', `${usedPrefix}absen`, 'πππ', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

module.exports = handler
let wm = global.botwm