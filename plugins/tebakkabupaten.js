let fetch = require('node-fetch')
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
γ π§ππππ ππππ¨π£ππ§ππ‘ γ

β±οΈTimeout *${(timeout / 1000).toFixed(2)} detik*
πKetik ${usedPrefix}tekb Untuk Bantuan
πPrize: ${poin} XP
`.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, ' β¦Κα΄Ι΄-Κα΄α΄ ', 'ππππππππ', '.teka', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkabupaten[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, 'β¦Κα΄Ι΄-Κα΄α΄', 'ππππ πππππ', '.tebakkabupaten', conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

module.exports = handler