let fetch = require('node-fetch')
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*γ TEBAK LIRIK γ*\n
*${json.soal}*

β±οΈTimeout *${(timeout / 1000).toFixed(2)} Detik
πKetik ${usedPrefix}teli Untuk Bantuan
πPrize: ${poin} XP
`.trim()
    conn.tebaklirik[id] = [
        await conn.sendButton(m.chat, caption, ' β¦Κα΄Ι΄-Κα΄α΄ ', 'ππππππππ', `.teli`),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaklirik[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, ' β¦Κα΄Ι΄-Κα΄α΄ ', 'ππππ πππππ', `.tebaklirik`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i

module.exports = handler