const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!sunucu') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Sunucu Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!oto-rol** \n Sunucuya bir kullanıcı girdiğinde belirttiğiniz rolü verir. \n\n **› r!welcome** \n Sunucuya biri katıldığında istediğiniz mesaj biçiminde dm yoluyla mesaj yollar.embed veya normal mesaj olarak ayarlanabilir,içinde değişkenler vardır.\n\n**› r!oto-tag** \n Sunucuya giren üyelerin ismini belirttiğiniz şekilde düzenler.")
.addBlankField()
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
message.channel.send(help)
  } else {
    

     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Server Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**› r!outo-role** \ngive the role that you specify when a user enters the server.\n\n **› r!welcome** \n When someone joins the server, it sends a dm message to the font of your choice.Can be set in embed or regular message format \n\n **› r!oto-tag** \n Edit the name of the members joining the server as you specify.")
.addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
  message.channel.send(help)   
  }
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sunucu', 'server'], 
  permLevel: 0
};

exports.help = {
  name: 'help-sunucu',
  description: 'taslak', 
  usage: 'sunucu'
};

