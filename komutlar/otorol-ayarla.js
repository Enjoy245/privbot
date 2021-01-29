const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<:xr_red:804641142989127700> **Lütfen Bir Rol Belirt!**`) 
 if(!kanal) return message.channel.send(`<:xr_red:804641142989127700> **Lütfen Bir Kanal Belirt!** \n<:xr_verfied:804641142251454495> **__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 

 message.channel.send(`╔▬▬▬▬▬▬▬▬ xR BOT | Otorol Sistemi ▬▬▬▬▬▬▬▬▬
║
║► **<a:xr_uyar:801074551853023253> Botun Rol'ü (<@&804644889148260385>) Roller kısmında ${rol}'ün altında ise Bot otorol vermez. \n║► <a:xr_uyar:801074551853023253> Lütfen altta ise üste çekiniz.**
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║► <:xr_onay:804641156558225419>  Otorol \`Aktif\` Edildi.
║► <:xr_onay:804641156558225419>  **${rol}** Olarak Güncelledim! 
║► <:xr_onay:804641156558225419>  Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'otorol-ayarla',
  aliases: []
};
