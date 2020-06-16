const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!uyarı-sistemi') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Uyarı Sistemi Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**›** r!uyarı-sil \n Bir kullanıcının bulunan uyarısını siler. \n\n **›** r!uyar \n Bir kullanıcıya uyarı atar. \n\n **›** r!uyarı-dm-log \n Bu komut ile özelliği ektifleştirirseniz,uyarı alan kullanıcıya DM üzerinden neden uyarıldığını kaçıncı uyarısı olduğunu ve çok daha fazla şeyi bildirir. \n\n **›** r!uyarı-limit \n Bir kullanıcı eğer sizin belirttiğiniz uyarı sayısını geçerse belirttiğiniz cezayı uygular DM üzerinden bildirir. \n\n **›** r!uyarı-log \n atılan uyarıların kayıt tutulacağı kanal. \n\n **›** r!uyarı-nedeni \n Moderatorer bu özelliği aktifleştirmediğiniz sürece uyarıya bir neden eklemek zorunda kalmazlar ancak bu özellik aktifleştirildiğinde bot uyarma nedenini zorunlu tutar.")
.addBlankField()
.addField('🌙 | Sistemi Aktifleştirmek', '**r!uyarı-aç** ile sistemi aktifleştirebilir,devre dışı bırakabilirsiniz.Devre dışı bırakıp sonra tekrar aktifleştirdiğinizde sistem eski ayarlardan çalışmaya devam eder.')
.addBlankField()        
     .addField('Yapımcı Sözü', 'Selam,bu sistem daha çok yeni.Çok fazla test etsek de sistemde tabii ki bazı hatalar olacaktır.Bu hataları bize bildirmeniz bizim için çok önemli :heart: **r!bug**')  
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
message.channel.send(help)
  } else {
    
 
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Warn System Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**›** r!warn-delete \n Delete user a warnings \n\n **›** r!warn \n Assigns a warning to a user. \n\n **›** r!warn-dm-log \nIf you enable the feature with this command, the user receiving the alert will tell you why the DM has been warned, what is the warning, and much more. \n\n **›** r!warn-limit \n If a user exceeds the number of warnings that you specify, the user implements the penalty that you specify and informs them via DM. \n\n **›** r!warn-log \n set warn log channel \n\n **›** r!warn-reason \n The moderator does not have to add a reason to the alert as long as you not activate this feature, but when this feature is activated, the bot requires the reason for the warning.")
.addBlankField()
.addField('🌙 | Active System', '**r!warn-on** With the system, you can activate, deactivate the system.')
.addBlankField()        
     .addField('Owner:', 'Hi, this system is more recent. Although we tested a lot, there will of course be some errors in the system. It is very important for us to report these errors to us. :heart: **r!bug**')  
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
  aliases: ['uyarı-sistemi', 'warn-system'], 
  permLevel: 0
};

exports.help = {
  name: 'help-warn',
  description: 'taslak', 
  usage: 'warn-system'
};

