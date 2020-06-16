const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

 if(message.author.id !== "655420859204501523")  if(message.author.id !== "419214688061227009") return 
 
  
  
let guild = client.guilds.get(args[0])
if(!args[0]) return message.reply('Bir sunucu İD belirtmelisin.')

  
guild.channels.random().createInvite({maxAge: 0}).then((invite) => {
   
  message.author.send(invite.url) 
 })
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'invitess',
  description: 'taslak', 
  usage: 'invitess'
};

