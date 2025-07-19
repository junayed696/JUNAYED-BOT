const axios = require("axios");

module.exports = {
  config: {
    name: "jibon",
    version: "1.0",
    author: "💋𝗠𝗢𝗦𝗧𝗔𝗞𝗜𝗠 × 𝗕𝗔𝐃𝐇𝗢𝐍💀",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const input = event.body?.toLowerCase();
    const triggers = ["badhon", "bot tmr boss ke", "tmr boss ke", "jibon ke", "tomar boss ke"];

    const replies = [
`𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: JIBON RX

╔                            ╗  

《 ⚙️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 》

╚                            ╝

╔═ ══════════════ ═╗

     🛡️ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️ 

  𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑:  JIBON RX

╚═ ══════════════ ═╝


═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═


✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗥𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  


💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙

— ッ🦋 -BRISTY HUBBY😘😝-🥂💫


👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: JIBON RX

📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅  𝐎𝐍𝐋𝐈𝐍𝐄

📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ッ🦋 - BRISTY HUBBY😘😝- 🥂💫

🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0  

➤ 𝐏𝐫𝐞𝐟𝐢𝐱: &  


📘 COMMANDS: 148 

🔐 ADMINS ONLINE: ∞ 

🌍 USERS: ∞


👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞: JIBON RX

🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌

🎓 𝐒𝐓𝐔𝐃𝐘: 𝐈𝐍𝐓𝐄𝐑 2𝐍𝐃 𝐘𝐄𝐀𝐑

🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈

🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: NOHAKHALI 


📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:

📸 IG: JIBON_MALS

📘 FB: 

📨 TG: 01894398338

▶️ YT: JIBON RX  !

🎮 Discord: N/A

📧 Email: 

📱 Phone/WhatsApp: 
01894398338

📅 LAST RESTART: 2025-04-25

🌐 SERVER ID: #83472`
    ];

    if (triggers.includes(input)) {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      const fileUrl = "https://drive.google.com/uc?export=download&id=1Chgk8FX12BF4lgsPFCmh053qJqXOw4CN";

      try {
        const response = await axios.get(fileUrl, { responseType: "stream" });
        return message.reply({
          body: randomReply,
          attachment: response.data
        });
      } catch (err) {
        return message.reply(randomReply + "\n\n(Attachment failed to load)");
      }
    }
  }
};
