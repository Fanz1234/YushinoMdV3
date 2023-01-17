import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = await fetch(`https://api.zeeoneofc.xyz/api/downloader/tiktok?url=${args[0]}&APIKEY=2GLx5gnf`)
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
    let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${res.title} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${res.author}
◈ ━┉┈┄┈┈ ►`
    conn.sendButtonVid(m.chat, res.video, result, '_© Created by aldi_', `Audio`, `.gettt ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i

export default handler
