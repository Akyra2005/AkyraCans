let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('[โ]  ๐ช๐ฎ๐ถ๐, ๐๐ป ๐ฃ๐ฟ๐ผ๐ฐ๐ฒ๐๐')
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'masukan teksnya bang',m)
  let p = await (await fetch('https://tolol.ibnux.com/img.php?nama=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , '*Process Completeโ๏ธ*', m)
}
handler.help = ['tololserti <Teks>']
handler.tags = ['nulis']
handler.command = /^tololserti$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

