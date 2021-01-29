  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`xR BOT | Genel Komutlar`, client.user.avatarURL())
.setDescription(`Botumuzu eklemek için \`${prefix}davet\` yazarak ekleyebilirsiniz. \n\n▬▬▬▬▬▬▬▬▬<a:xr_ay:798217960446885989> Komutlar <a:xr_ay:798217960446885989>▬▬▬▬▬▬▬▬▬`)
.addField(`**Komut Sayısı**`,`・\`${prefix}komutlar\``,true)
.addField(`**Davet Et**`,`・\`${prefix}davet\``,true)
.addField(`**Bot Bilgi**`,`・\`${prefix}botbilgi\``,true)
.addField(`**Profil**`,`・\`${prefix}profil\``,true)
.addField(`**Oylama**`,`・\`${prefix}oylama\``,true)
.addField(`**Duyuru**`,`・\`${prefix}duyuru\``,true)
.addField(`▬▬▬▬▬▬▬▬▬<:xr_duyuru:804641161461497866> Bilgilendirme <:xr_duyuru:804641161461497866>▬▬▬▬▬▬▬▬▬ \n\n`,`<:xr_nokta:798562525935042600> \`${prefix}davet\` | xR'ı Sunucunuza Davet Edebilirsiniz.\n<:xr_nokta:798562525935042600>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir. \n<:xr_nokta:798562525935042600>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir. \n<:xr_nokta:798562525935042600>  \`${prefix}destek-sunucum\` | xR Bot hakkında yardım almak isterseniz destek sunucusuna katılabilirsiniz.`)
.setThumbnail('https://cdn.discordapp.com/attachments/804640866165456899/804663759011708938/standard.gif')
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
