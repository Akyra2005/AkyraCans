const { createHash } = require('crypto')
let fetch = require('node-fetch')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 25) throw '*Sudahlah, Kau Daftar Dengan Umur Asli Kau Aja, Lu Pikir Gwe Ga Kasih Pembatas Umur, Ribet Bet Dah Luð¤£*'
  if (age < 12) throw '*Sudahlah, Kau Daftar Dengan Umur Asli Kau Aja, Lu Pikir Gwe Ga Kasih Pembatas Umur, Ribet Bet Dah Luð¤£*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let str = `
â­ââââââð¥ðððð¦ð§ð¥ðð§ðð¢ð¡
ââ Nama : ${name}
ââ Umur : ${age}Tahun
ââ SN : ${sn}
ââ Status : Success
âââââââââââââââââââ>

#ceksn Untuk Melihat SN
`.trim()
conn.send2Button(m.chat, str,`${wm}`, `â®â° ðððð`, `.menu`, 'ððððð', `.rules`, m)
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
let wm = global.botwm

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}