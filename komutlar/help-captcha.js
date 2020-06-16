const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!yardım-captcha') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Captcha Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Captcha sisteminde detaylı bilgiyi r!bilgi-captcha yazarak alabilirsiniz.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!captcha** \n Captcha sistemi bu komut ile aktifleştirebilirsiniz. \n\n **r!captcha-off** \n Captcha sistemi bu komut ile devre dışı bırakabilirsiniz. \n\n**› r!captcha-settings** \n Jendisa Bot sunucunuzdaki aktif captcha ayarlarını gösterir.\n\n**› r!bilgi-captcha** \n Captcha nedir?,ne işe yarar? gibi soruların cevaplarını burdan alabilrsiniz")
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
  .setTitle('Jendisa Captcha Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('You can get detailed information on the Captcha system r!info-captcha.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**› r!captcha** \n You can activate the captcha system with this command. \n\n **› r!captcha off** \n You can off the captcha system with this command. \n\n **› r!captcha-settings** \n Jendisa Bot Displays the active captcha settings on your server.\n\n**› r!info-captcha** \n What is Captcha? You can get answers to questions like")
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
  aliases: ['captcha​-help','yardım-captcha'], 
  permLevel: 0
};

exports.help = {
  name: 'help-captcha',
  description: 'taslak', 
  usage: 'captcha-help'
};

