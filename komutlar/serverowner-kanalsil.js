const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let bot = message.guild.members.get(client.user.id)
  let destek = "https://www.google.com"
  let kanal = message.mentions.channels.first() || message.guild.channels.get(args[0])
  
  
  if (message.author.id !== message.guild.owner.id) return message.reply('To use this command, you must be the owner of the "`'+message.guild.name+'`" server.')
  
  if (!bot.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I need to have **"MANAGE CHANNELS"** permissipns to remove a channel.');
  
  if(!kanal) return message.channel.send('label the channel to be deleted or enter the ID.')
  
  message.channel.send('`'+kanal.name+ '` **Deleted!** <a:copluk:650627079989231646>')
  
message.guild.channels.get(kanal.id).delete()
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ch-d', 'kanal-sil'], 
  permLevel: 0
};

exports.help = {
  name: 'delete-channel',
  description: 'taslak', 
  usage: 'delete-channel'
};
