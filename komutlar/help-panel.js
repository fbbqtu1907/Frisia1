const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!panel-kurulum') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Panel Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin. \n\n **[:star:]** => İşaretli komutlar Gold Üyeler içindir.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!panel-create** \n Sunucu panelini kurar.İçinde aktif üye,rekor aktif,bot sayısı,toplam üye gibi değerleri barındırır.Türkçe dili desteği vardır.\n\n**› r!panel-delete** \n Sunucudaki paneli kayıtlı olan panel verilerini siler.\n\n**› r!panel-refresh** \n Eğer panelde bir hata olursa bu komutla düzeltebilirsiniz.")
.addBlankField()
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')        
message.channel.send(help)
 return 
  }
    
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Panel Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.\n\n => Commands with the **[:star:]** symbol are for Gold Members only.')
  .addBlankField()
.addField(':blue_book: | __COMMANDS__', "**› r!panel-create** \n It installs the server panel. It contains values ​​such as online member, record online, number of bots, total member. It has english language support.\n\n**› r!panel-delete** \n panel and deletes panel data.\n\n**› r!panel-refresh** \n If there is an error in the panel, you can correct it with this command.")
.addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
  message.channel.send(help)   
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['panel-kurulum','panel'], 
  permLevel: 0
};

exports.help = {
  name: 'help-panel',
  description: 'taslak', 
  usage: 'panel'
};

