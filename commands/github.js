const moment = require('moment-timezone');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/repos/BMM-28/SPARTA-XMD');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = `*乂  𝗦𝗣𝗔𝗥𝗧𝗔-𝗫𝗠𝗗  乂*\n\n`;
    txt += `✩  *𝑵𝒂𝒎𝒆𝒔* : ${json.name}\n`;
    txt += `✩  *𝑾𝒂𝒕𝒄𝒉𝒆𝒓𝒔* : ${json.watchers_count}\n`;
    txt += `✩  *𝑺𝒊𝒛𝒆* : ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `✩  *𝑳𝒂𝒔𝒕 𝑼𝒑𝒅𝒂𝒕𝒆𝒅* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `✩  *𝑼𝑹𝑳* : ${json.html_url}\n`;
    txt += `✩  *𝑭𝒐𝒓𝒌𝒔* : ${json.forks_count}\n`;
    txt += `✩  *𝑺𝒕𝒂𝒓𝒔* : ${json.stargazers_count}\n\n`;
    txt += `⚡ *𝗦𝗣𝗔𝗥𝗧𝗔-𝗫𝗠𝗗*`;

    // Use the local asset image
    const imgPath = path.join(__dirname, '../assets/bot_image.jpg');
    const imgBuffer = fs.readFileSync(imgPath);

    await sock.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
  } catch (error) {
    await sock.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand;