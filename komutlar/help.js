const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 
  let destek = "https://discord.gg/behdg6R"
// taslak = \n\n **»** r!komut \n 
  
  if(message.content === "r!yardım") {
  
let help = new Discord.RichEmbed()
  .setTitle('Jendisa Yardım Menüleri')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField('——————————————————————', '**»** r!kullanıcı \n Bu menüde normal kullanıcıların kullanabileceği komutlar yer almakta. \n\n **»** r!moderasyon \n sunucudaki yetkililerin kullanabileceği komutların bulunduğu katagori. \n\n **»** r!koruma \n Sunucuya yapılan saldırıları engelliyen komutların bulunduğu katagori.\n\n **»** r!eğlence \n Eğlence komutları.  \n\n  **»** r!panel-kurulum \n Sunucu paneli komutları\n\n **»** r!sunucu \n Sunucu komutları \n\n**»** r!yardım-captcha \n Captcha koruma sistemi hakkında komutlar,detaylı bilgiyi burdan alabilirsiniz. \n\n **»** r!uyarı-sistemi \n Sunucunuzda harika bir uyarı sistemi kurmak istiyorsanız bu harika olacaktır! Herşeyi kendinize göre özelleştirin.')
.addBlankField()
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL('https://discord.gg/behdg6R')
  .setColor('RANDOM')
  message.channel.send(help)
return
  } 
let help = new Discord.RichEmbed()
  .setTitle('Jendisa Help Menus')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField('——————————————————————', '**»** r!user \n This menu more contain user commands. \n\n **»** r!moderation \n Commands used by moderators within the server. \n\n **»** r!protection \n Protection systems to prevent attacks.\n\n **»** r!fun \n category of entertainment commands \n\n **»** r!panel \n Server panel commands\n\n **»** r!server \n Server commands \n\n**»** r!help-captcha \n Commands about captcha protection system, you can get detailed information here.\n\n **»** r!warn-system \n This is great if you want to install a great alert system on your server! Customize everything for yourself.')
.addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')
  message.channel.send(help)
  
 

  
  
  //Burda gezebileceğin yardım menüleri bulunuyor eğer bir sorun veya hata varsa aşağıdaki linklerden bize ulaşabilirsin./
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yardım'], 
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'taslak', 
  usage: 'help'
};
