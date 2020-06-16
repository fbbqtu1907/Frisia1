const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
if(message.content === "r!davet") {

  let link = new Discord.RichEmbed()
   .setTitle('Linkler')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Beni sunucunuza ekleyerek özelliklerimden yararlanabilirsiniz.')
  .addBlankField()
  .addField('Bot', '⫸ [Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8)\n ⫸ [Destek Sunucusu!](https://discord.gg/behdg6R)')
  .setFooter('Rem Moderations (E.S)')
  .setTimestamp()
  .setThumbnail(message.guild.icorURL)
  .setURL('https://discord.gg/3vMKch')
  .setColor('RED')
  message.channel.send(link).then(s => {
    
 s.react('📩')   
    
  }) 
  return
} 
  
  

  let link = new Discord.RichEmbed()
   .setTitle('Links')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('You can take advantage of the features by adding me to your server.')
  .addBlankField()
  .addField('Bot', '⫸ [Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8)\n ⫸ [Support Server!](https://discord.gg/behdg6R)')
  .setFooter('Rem Moderations (E.S)')
  .setTimestamp()
  .setThumbnail(message.guild.icorURL)
  .setURL('https://discord.gg/3vMKch')
  .setColor('RED')
  message.channel.send(link).then(s => {
    
 s.react('📩')   
    
  })
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['davet'], 
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'taslak', 
  usage: 'invite'
};
