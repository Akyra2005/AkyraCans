const fetch = require('node-fetch')
let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, '*Mohon Selesaikan Dulu Sesi Ini Untuk Melanjutkan Ke Sesi Berikutnya*', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
γ ππ¦ππ π’π§ππ γ

Pertanyaan
${json.soal}

β±οΈTimeout ${(timeout / 1000).toFixed(2)} Detik
πKetik ${usedPrefix}ao Untuk Bantuan
πPrize: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, 'β¦Κα΄Ι΄-Κα΄α΄', 'Bantuan', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu Untuk Menjawab Habis!\nJawabannya Adalah *${json.jawaban}*`, 'β¦Κα΄Ι΄-Κα΄α΄', 'ππππ πππππ', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.register = true
let wm = global.botwm
module.exports = handler
