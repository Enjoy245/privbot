const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`Pirate Linkler`, client.user.avatarURL())
.setDescription('**• [xR`ı Sunucunuza Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=803503686734315531&permissions=8&scope=bot)**\n\n**• [Destek Sunucusu]()**')
.setFooter(`${message.author.username} tarafından kullanıldı!`) 
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };