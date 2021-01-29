  const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`**Bu komutu kullanabilmek için "\`SUNUCUYU YÖNET\`" yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<:xr_red:804641142989127700> **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin**\n <:xr_verfied:804641142251454495> **Örnek**: **${prefix}kayıt-kanal-ayarla** \`#kanal\``)
 
  message.channel.send(`<:xr_verfied:804641142251454495> Başarılı, \n\<:xr_evrak:804641139344801802> Gelen kullanıcıların Kayıt olacağı kanalı Başarıyla ${kanal} **olarak ayarladım.**`)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-kanal-ayarla', 
  aliases: []
};

