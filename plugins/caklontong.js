let fetch = require('node-fetch')
let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, '*Mohon Selesaikan Dulu Sesi Ini Untuk Melanjutkan Ke Sesi Berikutnya*', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
γ πππ ππ’π‘π§π’π‘π γ

Pertanyaan
${json.soal}

β±οΈTimeout ${(timeout / 1000).toFixed(2)} Detik
πKetik ${usedPrefix}calo Untuk Bantuan
πPrize: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, 'β¦Κα΄Ι΄-Κα΄α΄', 'πππππππ', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu Untuk Menjawab Habis!\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, 'β¦Κα΄Ι΄-Κα΄α΄', 'πππ πππππππ', '.caklontong')
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.register = true
module.exports = handler