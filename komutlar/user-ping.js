const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  

  
  message.channel.send(':ping_pong: **Pong!**').then(s => {
  setTimeout(() => {
    let ping = new Discord.RichEmbed()
  .setTitle('Bot Ping Status')
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription('We are always at your service to make Discord easier to use, to provide a better service on your behalf.If you encounter any errors, do not forget to contact us.!')
  .addBlankField()
  .addField('❄️ ⧨ Ping Level:', '**'+client.ping+'** ms')
  .setFooter('Jendisa', message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL('https://www.google.com')
  .setColor('#D608FF')
  s.edit(ping).then(x => x.delete(30000)) 
  
  }, 3000)
  })
  
  
  

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'taslak', 
  usage: 'ping'
};

