let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk Menggunakan Fitur ${usedPrefix}anime\nSilahkan Ketik: ${usedPrefix}anime [query]\nContoh: ${usedPrefix}anime random\n\nQuery Yang Tersedia:\nrandom, waifu, husbu, neko`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply('Searching...')

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'Kamu Wibu Ya, Aku Suka Cowok Wibu<3', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Maaf, Fitur Sedang Error ', m)
            })
    } else {
        conn.reply(m.chat, `Maaf Query Tidak Tersedia. Silahkan Ketik ${usedPrefix}anime Untuk Melihat List Query`, m)
    }

}

handler.help = ['anime <query>']
handler.tags = ['anime']
handler.command = /^(anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 4
handler.level = 5
module.exports = handler
