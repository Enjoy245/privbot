const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:xr_red:804641142989127700> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!kanal) return message.channel.send(`<:xr_red:804641142989127700> **Lütfen Bir Kanal Belirt!** \n<:xr_verfied:804641142251454495> **__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
  
 if(isNaN(args[1])) return message.channel.send(`<:xr_red:804641142989127700> **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n<:xr_verfied:804641142251454495>**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
 
 if(message.guild.memberCount > args[1]) return message.channel.send(`<:xr_red:804641142989127700>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n<:xr_verfied:804641142251454495>**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬ xR BOT | Sayaç Sistemi ▬▬▬▬▬▬▬▬▬
║► <:xr_onay:804641156558225419>  Sayaç Aktif Edildi.
║► <:xr_onay:804641156558225419>  **${args[1]}** Olarak Güncelledim! 
║► <:xr_onay:804641156558225419>  Sayaç Kanalını **${kanal}** Olarak Güncelledim! 
║
║► <:xr_evrak:804641139344801802>  ${args[1]} Kişi Olmaya Son **${kalan}**  Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};

exports.config = {
  name: 'sayaç-ayarla',
  aliases: ["sayaçayarla"]
};

