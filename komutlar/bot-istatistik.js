


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let luxia = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("**xR Bot | Verileri**", `<:xr_liste:804641150005805068>・**Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:xr_liste:804641150005805068>・**Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:xr_liste:804641150005805068>・**Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("**Bot Geliştiricisi**", `<:ramiz_developer2:798792766527504424> <@347680480583352320>\n\n`)
.addField("**Sürümler**", `<a:ramiz_yesil_yuvarlak:798536964281335859> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:xr_yuvarlak_red:798795688762408980> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("**Gecikmeler**", `<:xr_tamir:804641155043295262>  **${client.ws.ping}** ms`,true)
.setThumbnail('https://cdn.discordapp.com/attachments/804640866165456899/804663759011708938/standard.gif')
.setColor("#ffd100")
message.channel.send(luxia)
}

exports.config = {
name: "botbilgi",
aliases: []
}