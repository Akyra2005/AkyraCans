const fetch = require('node-fetch')
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
γ π§ππππ πππ πππ₯ γ
  
β±οΈTimeout *${(timeout / 1000).toFixed(2)} detik*
πKetik ${usedPrefix}hint Untuk Bantuan
πPrize: ${poin} XP
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.img)).buffer(), caption, `${wm}`, 'ππππππππ', '.hint', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakgambar[id]) await conn.sendButton(m.chat, `Waktu untuk menjawab habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'ππππ πππππ', '.tebakgambar', conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

module.exports = handler
let wm = global.botwm