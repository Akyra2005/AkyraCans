let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kakð\nSaya Adalah ðððððð ð±ð¾ð, ðððððð ð±ð¾ð Adalah Sebuah Bot Yang Bisa Membantumu Di Grup Ini, Klik Tombol Dibawah Ini Jika Kamu Ingin Menggunakan Bot!`.trim(), `${wm}`, 'â®â° Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler

let wm = global.botwm