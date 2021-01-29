
const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "xR"

exports.run = async (bot, msg, args) => {

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.avatarURL();
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `<:xr_rahatsiz_etmeyin:804641150798790686> | **Rahatsız Etmeyin**`)
        .replace("online", `<:xr_cevrimici:804641150333222933> | **Çevrimiçi**`)
        .replace("idle", `<:xr_bosta:804641148294529034> | **Boşta**`)
        .replace("offline", `<:xr_cevrimdisi:804641150027300914> | **Çevrimdışı**`)

        userinfo.bot = user.bot.toString()
        .replace("false", `<:xr_red:804641142989127700> Hayır`)
        .replace("true", `<:xr_verfied:804641142251454495> Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] | (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] | (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
 
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('<:xr_download:804641161079291914> Kullanıcı Hakkında Bilgiler')
        .addField(`<a:ramiz_yuvarlak_mavi:798795688782856192> Durum`, userinfo.status, false)
        .setColor('#6278c5')
        .addField(`▬▬▬▬▬▬▬▬▬<a:xr_load:804641163927224351>▬▬▬▬▬▬▬▬▬\n\n<a:xr_dia:801074378850828288>Sunucuya Katılım Tarihi`, userinfo.dctarihkatilma, false)
        .addField(`<:xr_discord:804641155165847562> Discord'a Katılım Tarihi`, userinfo.dctarih, false)
        .addField(`\n\nKimlik`, userinfo.id, true)
        .addField(`Bot mu?`, userinfo.bot, true)
        .setFooter(`xR Bot | Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }

exports.config = {
  name: 'profil',
  aliases: []
};



