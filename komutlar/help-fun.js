const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!eğlence') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Eğlence Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin. \n\n **[:star:]** => İşaretli komutlar Gold Üyeler içindir.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!reboot** \n Bot u yeniden başlatmak ister misin? \n `r!reboot tr` \n\n ** [:star:] › r!sev** \n Sevilmek güzeldir.. \n\n ** [:star:] › r!ağla** \n Birileri üzgün veya ağlamaya mı ihtiyacı var?\n\n **› r!generator** \n Üstü çizili bir yazıya ne dersin?\n\n **› r!öp** \nBirini öpmek istiyor gibisin?")
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
  .setTitle('Jendisa Fun Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.\n\n => Commands with the **[:star:]** symbol are for Gold Members only.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**› r!reboot** \n Do you want to restart the bot? \n\n **[:star:] › r!love** \n it's nice to be loved \n\n **[:star:] › r!cry** \n Is someone in a condition to cry?\n\n **› r!generator** \ntext generator\n\n **› r!öp** \nSounds like you want to kiss someone?")
.addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
  message.channel.send(help)   
  }
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['fun','eğlence'], 
  permLevel: 0
};

exports.help = {
  name: 'help-eğlence',
  description: 'taslak', 
  usage: 'eğlence'
};

