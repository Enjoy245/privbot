const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:xr_red:804641142989127700> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

   let question = args.join(' ');

   let user = message.author.username
   

    const embedd = new Discord.MessageEmbed()

     .setDescription(`<:xr_red:804641142989127700> Duyurulacak Mesajı Girmediniz.`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()

       .setColor("#ffd100")
       .setThumbnail(client.user.avatarURL)
       .addField(`**Duyuru**`, `\n\n **${question}**`)
     
     
     message.channel.send(embed).then(function(message) {

       });

     };

     exports.config = {
     name: 'duyuru',
     aliases: ['duyuru-yap']
};

