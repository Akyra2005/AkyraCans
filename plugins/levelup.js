let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, max } = levelling.xpRange(user.level, user.exp, global.multiplier)
    return 
    let str = `
γ πππ¦π¦ ππ«π£ γ

π°Level ${user.level} (${user.exp}/${max}) π
βKurang *${min} XP π§¬* Lagi
`.trim()
conn.sendButton(m.chat, str, wm, 'MY', '.my', m)
  }
  user.level++
  let str2 = `
γ πππ©ππ π¨π£ γ

Selamat, Anda Telah Naik Level!π
π°${user.level - 1} β  ${user.level} 
  `.trim()
conn.sendButton(m.chat, str2, wm, 'MY', '.my',m)
}

handler.help = ['levelup']
handler.tags = ['rpg']

handler.command = /^levelup$/i

module.exports = handler

let wm = global.botwm