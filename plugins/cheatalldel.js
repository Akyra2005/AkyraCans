let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = 0
        global.db.data.users[m.sender].limit = 0
        global.db.data.users[m.sender].level = 0
        global.db.data.users[m.sender].exp = 0
        
}
handler.help = ['delcheat']
handler.tags = ['owner']
handler.command = /^(delcheat)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
