const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");

let veri = await db.fetch(`kanalkoruma_${message.guild.id}`) 
let geçerli = args[0]

if(geçerli === 'on') {
 
  if(veri) return message.channel.send("Looks like the system's already active.")
  message.channel.send('Okay! Channel protection system is currently active')
  db.set(`kanalkoruma_${message.guild.id}`, 'on') 
message.guild.owner.send('Channel protection system actived by `'+message.author.username+'`')
}

if(geçerli === 'off') {
 
  if(!veri) return message.channel.send('Apparently the system is already disabled.')
  message.channel.send('Okay! Channel protection system is currently disabled')
   db.delete(`kanalkoruma_${message.guild.id}`)
  message.guild.owner.send('Channel protection system disabled by `'+message.author.username+'`')
return
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
           message.channel.send('Okay! Channel protection system is currently active')    
           db.set(`kanalkoruma_${message.guild.id}`, 'on')   
           message.guild.owner.send('Channel protection system actived by `'+message.author.username+'`')          
   }
        
    
    if(collected.first().content === "off") { 
           
           if(!veri) return message.channel.send('Apparently the system is already disabled.') 
           message.channel.send('Okay! Channel protection system is currently disabled')
           db.delete(`kanalkoruma_${message.guild.id}`)
         message.guild.owner.send('Channel protection system disabled by `'+message.author.username+'`')
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
  aliases: ['channel-protection', 'ch-p'], 
  permLevel: 0
};

exports.help = {
  name: 'channel-protection',
  description: 'taslak', 
  usage: 'channel-protection'
};
