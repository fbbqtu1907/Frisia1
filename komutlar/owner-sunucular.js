const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  
   if(message.author.id !== "655420859204501523")  if(message.author.id !== "419214688061227009") return 
  
  
 let sunucular = client.guilds.map(a => a.id + " | " + a.name).join('\n');
message.channel.send(sunucular, {code: "xl", split: true}); 
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['s-list'], 
  permLevel: 0
};

exports.help = {
  name: 's-list',
  description: 'taslak', 
  usage: 's-list'
};

