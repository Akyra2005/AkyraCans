let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos3 = global.db.data.users[m.sender].lastbansos3 || 0
    let randomaku = `${Math.floor(Math.random() * 107)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 85)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = './lib/kbansos.jpg'
    let mbansos = './lib/mbansos.jpg'
    let botol = global.botwm
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos3)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos3 > 300000) {
      if (Aku > Kamu) {
        conn.sendFile( m.chat, kbansos, 'b.jpg', `Kamu Korupsi Dana Bansos Tapi Kamu Tertangkap🚓\n\nAkibatnya Kamu Harus Membayar\n📉Denda Sebesar Rp 1,000,000`, m)
        user.money -= 1000000
        global.db.data.users[m.sender].lastbansos3 = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 1000000
        conn.sendFile( m.chat, mbansos, 'b.jpg', `Selamat Kamu Berhasil Korupsi Dana Bansos💸\n\nHasilnya Kamu Mendapatkan\n📈Uang Sebesar Rp 1,000,000`, m)
        global.db.data.users[m.sender].lastbansos3 = new Date * 1
      } else {
        conn.sendButton( m.chat, `Yahh Kamu Gagal Dalam Korupsi, Mungkin Gak Punya Keahlian Korupsi🤣\n\nKamu Juga Tidak Masuk Penjara Karna Kamu Melarikan Diri🏃`, `${botol}`, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastbansos3 = new Date * 1
      }
    } else conn.sendButton(m.chat, `Tadi Sudah Korupsi, Kapan² Lagi Aja💰\n\nDan Kamu Harus Menunggu Selama Agar Bisa Korupsi Bansos Kembali \n▸ 🕓 *${timers}*`, `${botol}`, `⋮☰ Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['korupsi3']
handler.tags = ['rpg']
handler.command = /^(korupsi3)$/i
handler.premium = false
handler.register = true
handler.limit = 5
handler.level = 7
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
