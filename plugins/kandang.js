let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
โใ KANDANG ๐พ ใโ
    
 โ [ ${banteng} ] Ekor Banteng๐
 โ [ ${harimau} ] Ekor Harimau๐
 โ [ ${gajah} ] Ekor Gajah๐
 โ [ ${kambing} ] Ekor Kambing๐
 โ [ ${panda} ] Ekor Panda๐ผ
 โ [ ${buaya} ] Ekor Buaya๐
 โ [ ${kerbau} ] Ekor Kerbau๐
 โ [ ${sapi} ] Ekor Sapi๐ฎ
 โ [ ${monyet} ] Ekor Monyet๐
 โ [ ${babihutan} ] Ekor Babi Hutan๐
 โ [ ${babi} ] Ekor Babi๐
 โ [ ${ayam} ] Ekor Ayam๐
 `.trim()
 conn.sendButton(m.chat, zer,wm, '๐๐๐๐๐ ๐๐๐๐๐', '.pasar', m)
} 
handler.help = ['kandang']
handler.command= /^(kandang)$/i
handler.register = true
let wm = global.botwm

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)