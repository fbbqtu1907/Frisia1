const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!kullanıcı') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Kullanıcı Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', '**› r!info** \n Belirtilen veya İD kimliği verilen kullanıcının bilgilerini gönderir.Sunucu bilgilerini almak için `!info server` kullanmalısın.\n\n **› r!davet** \n Jendisa bot davet linki. \n\n **› r!bug** \n Bottaki hataları bize bildirin!\n\n **› r!bot** \n bot bilgisi. \n\n **› r!güncelleme** \n Yapımcı tarafından yayınlanan son güncellemeler. \n\n **› r!gold-s** \n Gold Üyelik durumuzunu bitmesine kalan zamanı söyler')
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
  .setTitle('Jendisa User Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', '**› r!info** \n Sends the information of the value you specify. You must enter a tag or ID to get user information. Use `r!info server` if you want to get server information.\n\n **› r!invite** \n A great way to get me added!  \n\n **› r!bug** \nTell us about the bugs!\n\n **› r!bot** \n bot info.\n\n **› r!update** \n Latest updates from the owner. \n\n **› r!gold-s** \n Gold Tells the remaining time to finish your membership status')
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
  aliases: ['user','kullanıcı'], 
  permLevel: 0
};

exports.help = {
  name: 'help-kullanıcı',
  description: 'taslak', 
  usage: 'kullanıcı'
};

