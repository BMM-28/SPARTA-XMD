const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `🌍𝐒𝐏𝐀𝐑𝐓𝐀-𝐗𝐌𝐃  𝙞𝙨 𝘼𝙘𝙩𝙞𝙫𝙚!*\n\n` +
                       `*𝑽𝒆𝒓𝒔𝒊𝒐𝒏:* ${settings.version}\n` +
                       `*𝑺𝒕𝒂𝒕𝒖𝒔:* 𝙊𝙣𝙡𝙞𝙣𝙚\n` +
                       `*𝑴𝒐𝒅𝒆:* 𝙋𝙪𝙗𝙡𝙞𝙘\n\n` +
                       `*⚡ 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒:*\n` +
                       `• 𝑮𝒓𝒐𝒖𝒑 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕\n` +
                       `• 𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝑷𝒓𝒐𝒕𝒆𝒄𝒕𝒊𝒐𝒏\n` +
                       `• 𝑭𝒖𝒏 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔\n` +
                       `• 𝑨𝒏𝒅 𝒎𝒐𝒓𝒆!\n\n` +
                       `𝑻𝒚𝒑𝒆 *.𝙈𝙚𝙣𝙪* for full command list`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363361547835257@newsletter',
                    newsletterName:'𝐒𝐏𝐀𝐑𝐓𝐀-𝐗𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;