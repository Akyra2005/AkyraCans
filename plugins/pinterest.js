let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await fetch(`https://api.xteam.xyz/dl/pinterestdl?url=https://id.pinterest.com/pin/679691768761848752/&APIKEY=HIRO&query=${text}`)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  conn.sendButtonImg(m.chat, await (await fetch(json.result)).buffer(), `┏┉⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴✽ ̶┄┈┈┈┈┈┈┈┈┈┈┉┓\n┆ *PINTEREST SEARCH*\n└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴✽ ̶⌣ ✽ ̶\n🔎 *Pencarian :* ${text}\n💻 *Source :* Pinterest`, `${wm}`, 'Next', `${usedPrefix + command} ${text}`, m, 0, { thumbnail: await (await fetch(json.result)).buffer() })
}
handler.help = ['pinterest <pencarian>']
handler.tags = ['internet']
handler.command = /^(pint(erest)?)$/i
handler.limit = true
handler.register = true
module.exports = handler
let wm = global.botwm