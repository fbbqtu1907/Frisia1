const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  message.channel.send('Sunucudaki ban bot taramalarını `'+message.guild.name+'` adlı sunucuda devredışı bıraktım.')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'p-log',
  description: 'taslak', 
  usage: 'p-log'
};

