const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır. | xR BOT`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("xR BOT | Başarılı")
.setDescription("Öneriniz sisteme kayıt edilmiştir. Yardımcı olduğunuz için teşekkür ederiz :pray:")
.setFooter(`©️ Tüm hakları saklıdır. | xR BOT`);  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "804640866165456896"; // Sunucu ID
 
  var channelID = "804696570041204746"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<:xr_onay:804641156558225419>  • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<:xr_onay:804641156558225419>  • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<:xr_onay:804641156558225419> • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 