const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
let veri = await db.fetch(`capsblock_${message.guild.id}`) 
let geçerli = args[0]
  
 if(geçerli === 'on') {
 
  if(veri) return message.channel.send("Looks like the system's already active.")
  message.channel.send('Okay! Caps Block system is currently active')
  db.set(`capsblock_${message.guild.id}`, 'on') 
message.guild.owner.send('Caps Block system actived by `'+message.author.username+'`')
}

if(geçerli === 'off') {
 
  if(!veri) return message.channel.send('Apparently the system is already disabled.')
  message.channel.send('Okay! Caps Block system is currently disabled')
   db.delete(`capsblock_${message.guild.id}`)
  message.guild.owner.send('Caps Block system disabled by `'+message.author.username+'`')
}
  
if(!geçerli) {
message.reply('Please,send your channel a value \n\n `on` **/** `off`')
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "on") { 
       
     if(veri) return message.channel.send("Looks like the system's already active.")
           message.channel.send('Okay! Caps Block system is currently active')    
           db.set(`capsblock_${message.guild.id}`, 'on')   
           message.guild.owner.send('Caps Block system actived by `'+message.author.username+'`')          
   }
        
    
    if(collected.first().content === "off") { 
           
           if(!veri) return message.channel.send('Apparently the system is already disabled.') 
           message.channel.send('Okay! Caps Block system is currently disabled')
           db.delete(`capsblock_${message.guild.id}`)
         message.guild.owner.send('Caps Block system disabled by `'+message.author.username+'`')
         }
   let yer;
    if(collected.first().content === "on") yer = 'on'
     if(collected.first().content === "off") yer = 'off' 
  if(!yer) return message.channel.send('The value you specify must contain either on or off.')
  
  })

  
}  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['c-b'], 
  permLevel: 0
};

exports.help = {
  name: 'caps-block',
  description: 'taslak', 
  usage: 'caps-block'
};
