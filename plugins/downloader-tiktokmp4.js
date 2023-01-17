import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let url = await fetch(`https://saipulanuar.ga/api/download/tiktok?apikey=${bearr}&url=${args[0]}`)
  let json = await url.json()
    if (url.status !== 200) throw await url.text()
    
    let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${res.title} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${res.author}
◈ ━┉┈┄┈┈ ►`
    conn.sendButtonVid(m.chat, res.video, result, '_© Created by Fanz', `Audio`, `.gettt ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i

export default handler
