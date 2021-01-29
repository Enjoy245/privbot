const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<:xr_red:804641142989127700> OtoRol Mesajı İçin En Az 5 Karakter Belirtmelisin!\n<:xr_verfied:804641142251454495> **Örnek**: **x!oto-rol-msg** -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!')
  
 message.channel.send('<:xr_onay:798218982170820628> **Oto-Rol mesajı** `'+mesaj+'` **Olarak ayarlandı! \n\n<:xr_unlem:798805982633132042> Botun Rol"ü (<@&804644889148260385>) Ayarladığınız OtoRol Rolünün altında ise lütfen üstüne alın!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  
  
 let rol = message.mentions.roles.first() 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  
};
exports.config = {
  name: 'otorol-mesaj', 
  aliases: ['otorolmesaj','otorol-mesaj-ayarla','otorolmesaj-ayarla', 'otorolmesajayarla','oto-rol-msg','oto-rol-mesaj']
};

