const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let bot = message.guild.members.get(client.user.id)
  
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  
  if (!bot.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I need to have **"MANAGE MESSAGES"** permissions to delete black list worlds.'); 
  
  let yasaklanacak = args.slice(0).join(' ');
  
  if(!yasaklanacak) {
   
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Wrong Use')
    .setDescription('`r!add-world <world>`')
    .setColor('RED')
    .setFooter(client.user.username, client.user.avatarURL)
    
    message.delete()
    message.channel.send(embed)
  return  
  }
  
  if(yasaklanacak.size < 1) return message.channel.send('The length of the word to be added to the blacklist must be greater than `1`') 
  
  let yasaklı = await db.fetch(`yasaklı_${message.guild.id}-${yasaklanacak}`)
  
  if(yasaklı) {
   
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Oops!')
    .setDescription('The world with the name **'+yasaklanacak+'** already exists on **'+message.guild.name+'** ')
    .setColor('RED')
    .setFooter(client.user.username, client.user.avatarURL)
    message.delete()
    message.channel.send(embed)
  return 
  }

   db.set(`yasaklı_${message.guild.id}-${yasaklanacak}.name`, yasaklanacak)
  
  let embed = new Discord.RichEmbed()
  .setTitle('<a:bararl:626445944258560012> Successful!')
  .setDescription('The word has been successfully added to the blacklist!')
  .addBlankField()
  .addField('Word:', yasaklanacak)
  .setColor('BLUE')
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kelime-ekle'], 
  permLevel: 0
};

exports.help = {
  name: 'add-word',
  description: 'taslak', 
  usage: 'add-word'
};
