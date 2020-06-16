const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

  
  
  try {
     let silinecek = args.slice(0).join(' ');
     let bot = message.guild.members.get(client.user.id)
     let kelimeler = await db.fetch(`yasaklı_${message.guild.id}-${silinecek}`)
   
     let content = kelimeler.content
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  
  if (!bot.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I need to have **"MANAGE MESSAGES"** permissions to delete black list worlds.'); 
 
    
   let embed = new Discord.RichEmbed()
  .setTitle('<a:bararl:626445944258560012> Successful!')
  .setDescription('The word has been successfully deleted to the blacklist!')
  .addBlankField()
  .addField('Deleted Word:', silinecek)
  .setColor('RED')
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed)   
    
   db.delete(`yasaklı_${message.guild.id}-${silinecek}`); 
  
  } catch (e){
  if (e.message === "Cannot read property 'content' of null")
  return message.channel.send('**Word Not Found** 🔎\n\nWords are Case Sensitive. Make sure its spelt correctly!')  
};
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kelime-sil'], 
  permLevel: 0
};

exports.help = {
  name: 'delete-word',
  description: 'taslak', 
  usage: 'delete-word'
};
