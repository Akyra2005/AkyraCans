let fetch = require('node-fetch')
let limit = 5
let handler = async (m, { conn, command, args }) => {  
try {  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'harap masukan teksmu!!!',m)
  let p = await (await fetch('http://zekais-api.herokuapp.com/bukukanan?text='+encodeURIComponent(text) )).buffer()
  m.reply('[โ]  ๐ช๐ฎ๐ถ๐, ๐๐ป ๐ฃ๐ฟ๐ผ๐ฐ๐ฒ๐๐')
  conn.sendFile(m.chat, p, 'image.png' , '*Process Completeโ๏ธ*', m, false, {
  thumbnail: Buffer.alloc(0)
      })} catch (e) {
  m.reply (`apikey invalid atau server down`)} 
}
handler.help = ['nuliskanan <Teks>']
handler.tags = ['nulis']
handler.command = /^nuliskanan?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 5
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

