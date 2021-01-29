const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 



let eklenti = new Discord.MessageEmbed()  
.setAuthor(`xR Bot Gelişmiş Sistemler`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`▬▬▬▬▬▬▬▬▬<:xr_evrak:804641139344801802> Kısa Özet <:xr_evrak:804641139344801802>▬▬▬▬▬▬▬▬▬ \n\n<a:ramiz_space:798834084410425399>・**xR** Botu eklemek için \`${prefix}davet\` yazabilirsiniz. \n <a:xr_ay:798217960446885989> ・Prefixi değiştirmek isterseniz: **x!prefix ayarla** <Prefix>\n\n ▬▬▬▬▬▬▬▬▬<a:xr_ay:798217960446885989> Komutlar <a:xr_ay:798217960446885989>▬▬▬▬▬▬▬▬▬`)  
.addField(`***Kayıt Sistemi**`,`\`${prefix}kayıt-sistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`**Davet Sistemi**`,`\`${prefix}davet-sistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`▬▬▬▬▬▬▬▬▬<:xr_duyuru:804641161461497866> Bilgilendirme <:xr_duyuru:804641161461497866>▬▬▬▬▬▬▬▬▬ \n\n`,`<:xr_nokta:798562525935042600> \`${prefix}davet\` | xR'ı Sunucunuza Davet Edebilirsiniz.\n<:xr_nokta:798562525935042600>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir. \n<:xr_nokta:798562525935042600>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir. \n<:xr_nokta:798562525935042600>  \`${prefix}destek-sunucum\` | xR Bot hakkında yardım almak isterseniz destek sunucusuna katılabilirsiniz.`)
.setThumbnail('https://cdn.discordapp.com/attachments/804640866165456899/804663759011708938/standard.gif')
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sistemler",
  aliases: []
}
