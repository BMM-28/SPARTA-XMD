const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *⚡ ${settings.botName || '𝐒𝐏𝐀𝐑𝐓𝐀-𝐗𝐌𝐃'}*  
   𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *${settings.version || '𝟏.𝟎.𝟎'}*
   𝐎𝐰𝐧𝐞𝐫 ::${settings.botOwner || '𝐒𝐩𝐚𝐫𝐭𝐚-𝟐𝟖'}
   𝐘𝐓 : ${global.ytch}
   𝐈𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧 :𝐓𝐘𝐋𝐎𝐑𝐊𝐈𝐗{𝐁𝐞𝐬𝐭 𝐅𝐫𝐢𝐞𝐧𝐝}
   𝐈𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧 :𝐗𝐅𝐀𝐂𝐓𝐎𝐑{𝐁𝐞𝐬𝐭 𝐅𝐫𝐢𝐞𝐧𝐝}
   𝐊𝐄𝐈⚡[📌]
   𝐀𝐋𝐋𝐀𝐇(𝐒.𝐖)𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠🤲
╚═══════════════════╝

*𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬:*

╔═══════════════════╗
⚡ *𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .menu/help
║ 𝟐 .ping
║ 𝟑 .alive
║ 𝟒 .tts <text>
║ 𝟓 .owner
║ 𝟔 .joke
║ 𝟕 .quote
║ 𝟖 .fact
║ 𝟗 .weather <city>
║ 𝟏𝟎 .news
║ 𝟏𝟏 .attp <text>
║ 𝟏𝟐 .lyrics <song_title>
║ 𝟏𝟑 .8ball <question>
║ 𝟏𝟒 .groupinfo
║ 𝟏𝟓 .staff or .admins 
║ 𝟏𝟔 .vv
║ 𝟏𝟔 .trt <text> <lang>
║ 𝟏𝟕 .ss <link>
║ 𝟏𝟖 .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *𝐀𝐃𝐌𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .ban @user
║ 𝟐 .promote @user
║ 𝟑 .demote @user
║ 𝟒 .mute <minutes>
║ 𝟒 .unmute
║ 𝟓 .delete or .del
║ 𝟔 .kick @user
║ 𝟕 .warnings @user
║ 𝟖 .warn @user
║ 𝟗 .antilink
║ 𝟏𝟎 .antibadword
║ 𝟏𝟏 .clear
║ 𝟏𝟐 .tag <message>
║ 𝟏𝟑 .tagall
║ 𝟏𝟒 .chatbot
║ 𝟏𝟓 .resetlink
║ 𝟏𝟔 .welcome <on/off>
║ 𝟏𝟕 .goodbye <on/off>
╚═══════════════════╝

╔═══════════════════╗
🔒 *𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .mode
║ 𝟐 .autostatus
║ 𝟑 .clearsession
║ 𝟒 .antidelete
║ 𝟓 .cleartmp
║ 𝟔 .setpp <reply to image>
║ 𝟕 .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *𝐈𝐌𝐀𝐆𝐄/𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .blur <image>
║ 𝟐 .simage <reply to sticker>
║ 𝟑 .sticker <reply to image>
║ 𝟒 .tgsticker <Link>
║ 𝟓 .meme
║ 𝟔 .take <packname> 
║ 𝟕 .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🎮 *𝐆𝐀𝐌𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .tictactoe @user
║ 𝟐 .hangman
║ 𝟑 .guess <letter>
║ 𝟒 .trivia
║ 𝟓 .answer <answer>
║ 𝟔 .truth
║ 𝟕 .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *𝐀𝐈 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .gpt <question>
║ 𝟐 .gemini <question>
║ 𝟑 .imagine <prompt>
║ 𝟒 .flux <prompt>
╚═══════════════════╝

╔═══════════════════╗
📌 *𝐅𝐔𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*:
║ 𝟏 .compliment @user
║ 𝟐 .insult @user
║ 𝟑 .flirt 
║ 𝟒 .shayari
║ 𝟓 .goodnight
║ 𝟔 .roseday
║ 𝟕 .character @user
║ 𝟖 .wasted @user
║ 𝟗 .ship @user
║ 𝟏𝟎 .simp @user
║ 𝟏𝟏 .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *𝐓𝐄𝐗𝐓-𝐌𝐀𝐊𝐄𝐑*:
║ 𝟏 .metallic <text>
║ 𝟐 .ice <text>
║ 𝟑 .snow <text>
║ 𝟒 .impressive <text>
║ 𝟓 .matrix <text>
║ 𝟔 .light <text>
║ 𝟕 .neon <text>
║ 𝟖 .devil <text>
║ 𝟗 .purple <text>
║ 𝟏𝟎 .thunder <text>
║ 𝟏𝟏 .leaves <text>
║ 𝟏𝟐 .1917 <text>
║ 𝟏𝟑 .arena <text>
║ 𝟏𝟒 .hacker <text>
║ 𝟏𝟓 .sand <text>
║ 𝟏𝟔 .blackpink <text>
║ 𝟏𝟕 .glitch <text>
║ 𝟏𝟖 .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃*:
║ 𝟏 .play <song_name>
║ 𝟐 .song <song_name>
║ 𝟑 .instagram <link>
║ 𝟒 .facebook <link>
║ 𝟓 .tiktok <link>
║ 𝟔 .video <song name>
║ 𝟕 .ytmp4 <Link>
╚═══════════════════╝

╔═══════════════════╗
💻 *𝐆𝐈𝐓𝐇𝐔𝐁 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
║ 𝟏 .git
║ 𝟐 .github
║ 𝟑 .sc
║ 𝟒 .script
║ 𝟓 .repo
╚═══════════════════╝

 𝙴𝙽𝙹𝙾𝚈 𝚄𝚂𝙸𝙽𝙶 𝚂𝙿𝙰𝚁𝚃𝙰-𝚇𝙼𝙳 ⚡
 
Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363361547835257@newsletter',
                        newsletterName: '𝐒𝐏𝐀𝐑𝐓𝐀-𝐗𝐌𝐃',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363361547835257@newsletter',
                        newsletterName: '𝐒𝐏𝐀𝐑𝐓𝐀-𝐗𝐌𝐃 by 𝑺𝒑𝒂𝒓𝒕𝒂-𝟐𝟖',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
