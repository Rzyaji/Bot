exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉─
║│1. *!sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *!ytmp3* 
║│2. *!ytmp4* 
║│3. *!tiktok* 
║│4. *!ig* 
║│5. *!fb* 
║│6. *!twt* 
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *!wiki* 
║│2. *!nulis* 
║│3. *!quran*
║│4. *!pantun*
║│5. *!nama* 
║│6. *!pasangan* 
║│7. *!lirik* 
║│8. *!chord* 
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *!sholat* 
║│2. *!covid*
║│3. *!infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *!info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *!tts* 
║│2. *!quotes*
║│3. *!donasi*
║│4. *!foto cewek*
║│5. *!foto cowok*
║│6. *!pokemon*
║│7. *!loli*
║│8. *!hentai*
║│9. *!fotoanime*
║│10. *!namaninja* 
║│11. *!alay*  
║│12. *!say*  
║│13. *!infoig* 
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ 
╚════════════════════`
}
