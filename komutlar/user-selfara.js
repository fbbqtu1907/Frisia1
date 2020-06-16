const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't think you have enough privileges to use this command.");


  
  

let selfler;
 let hm = message.guild.members.filter(m => !m.user.bot).size + message.guild.members.filter(m => m.user.bot).size   
 if(hm !== message.guild.memberCount) selfler = message.guild.memberCount - hm +' self bot found in server!'
 if(!selfler) selfler = 'No Self Bots found on server!'   
  
  
  let aranıyor = new Discord.RichEmbed()
  .setTitle('<a:google:635846373052383243> | Searching self bots..')
  .setDescription('Self-bots are very harmful to the server and disagreement is also prohibited.')
  .addBlankField()
  .addField('Self Bots:', 'Searching!')
  .setColor('BLUE')
  .setTimestamp()
  message.channel.send(aranıyor).then(s => {
    setTimeout(() => {
    
  let aranıyor = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | Successful!')
  .setDescription('Self-bots are very harmful to the server and disagreement is also prohibited.')
  .addBlankField()
  .addField('Self Bots:', selfler)
  .setColor('RED')
  .setTimestamp()  
  s.edit(aranıyor)
      
    }, 7000)
    
    
  })
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['self-tara'], 
  permLevel: 0
};

exports.help = {
  name: 'search-self',
  description: 'taslak', 
  usage: 'search-self'
};
