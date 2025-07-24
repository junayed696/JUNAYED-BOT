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

  onChat: async function ({ event, message, getLang }) {
    const input = event.body?.toLowerCase();
    const triggers = ["jibon", "bot tmr boss ke", "tmr boss ke", "jibon ke", "tomar boss ke"];

    if (!triggers.includes(input)) {
      return;
    }

    const replies = [
      `𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: FMZ JIBON──😘😈🩵🪽󱢏

╔────────────────────────────╗  
   《 ⚙️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 》
╚────────────────────────────╝

╔═══════════════════╗
     🛡️ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️ 
  𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑:FMZ JIBON──😘😈🩵🪽󱢏 
╚══════════════════╝

═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═

✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗑𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  

💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙
— -ⒿⒾⒷⓄⓃ ⓌⒾⒻⒺ──😘😈🩵🪽󱢏 

👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 
📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅ 𝐎𝐍𝐋𝐈𝐍𝐄
📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ッ🦋 -ⒿⒾⒷⓄⓃ ⓌⒾⒻⒺ──😘😈🩵🪽󱢏 
🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0  
➤ 𝐏𝐫𝐞𝐟𝐢𝐱: -  

📘 COMMANDS: 148 
🔐 ADMINS ONLINE: ∞ 
🌍 USERS: ∞

👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞: JIBON MALS
🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌
🎓 𝐒𝐓𝐔𝐃𝐘: 𝐈𝐍𝐓𝐄𝐑 2𝐍𝐃 𝐘𝐄𝐀𝐑
🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈
🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: NOHAKHALI 

📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:
📸 IG: JIBON_MALS
📘 FB: Dimu na😾
📨 TG: 01894398338
▶️ YT: JIBON RX!
🎮 Discord: N/A
📧 Email: DIMUNA 😒
📱 Phone/WhatsApp: 01894398338

📅 LAST RESTART: 2025-04-25
🌐 SERVER ID: #83472`
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const fileUrl = "https://drive.google.com/uc?export=download&id=1-0oW220SYwCVkddWMrUVN6yLJEhwIYnA";

    try {
      const response = await axios.get(fileUrl, { responseType: "stream" });
      return message.reply({
        body: randomReply,
        attachment: response.data
      });
    } catch (err) {
      console.error("Error fetching attachment:", err);
      return message.reply(randomReply + "\n\n(Attachment failed to load)");
    }
  }
};const axios = require("axios");

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

  onChat: async function ({ event, message, getLang }) {
    const input = event.body?.toLowerCase();
    const triggers = ["jibon", "bot tmr boss ke", "tmr boss ke", "jibon ke", "tomar boss ke"];

    if (!triggers.includes(input)) {
      return;
    }

    const replies = [
      `𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: FMZ JIBON──😘😈🩵🪽󱢏

╔────────────────────────────╗  
   《 ⚙️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 》
╚────────────────────────────╝

╔═══════════════════╗
     🛡️ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️ 
  𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑:FMZ JIBON──😘😈🩵🪽󱢏 
╚══════════════════╝

═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═

✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗑𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  

💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙
➠𓆩𝐉𝐈𝐁𝐎𝐍◇𝐁𝐁𝐙᭄𓆪ــہہــــــــ//🙂🩵🪽

👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 
📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅ 𝐎𝐍𝐋𝐈𝐍𝐄
📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ッ🦋 [ ? ]➠𓆩𝐉𝐈𝐁𝐎𝐍◇𝐁𝐁𝐙᭄𓆪ــہہــــــــ//🙂🩵🪽
🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0  
➤ 𝐏𝐫𝐞𝐟𝐢𝐱: ? 

📘 COMMANDS: 148 
🔐 ADMINS ONLINE: ∞ 
🌍 USERS: ∞

👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞: JIBON MALS
🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌
🎓 𝐒𝐓𝐔𝐃𝐘: 𝐈𝐍𝐓𝐄𝐑 2𝐍𝐃 𝐘𝐄𝐀𝐑
🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈
🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: NOHAKHALI 

📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:
📸 IG: JIBON_MALS
📘 FB: Dimu na😾
📨 TG: 01894398338
▶️ YT: JIBON RX!
🎮 Discord: N/A
📧 Email: DIMUNA 😒
📱 Phone/WhatsApp: 01894398338

📅 LAST RESTART: 2025-04-25
🌐 SERVER ID: #83472`
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const fileUrl = "https://drive.google.com/file/d/10NCI0fJW4mwMKmTr7NW15yc0DhB5A8Ad/view?usp=drivesdk";

    try {
      const response = await axios.get(fileUrl, { responseType: "stream" });
      return message.reply({
        body: randomReply,
        attachment: response.data
      });
    } catch (err) {
      console.error("Error fetching attachment:", err);
      return message.reply(randomReply + "\n\n(Attachment failed to load)");
    }
  }
};
