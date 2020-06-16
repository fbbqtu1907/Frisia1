const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
    
let veri = await db.fetch(`banblock_${message.guild.id}`) 
let geçerli = args[0]
   
 if(geçerli === 'on') {
   
   if(veri) return message.channel.send("Looks like the system's already active.")
   message.reply('When you turn on this system, members who do not have **"ADMINISTRATOR"** permissions will not ban members by right-clicking. \n\n `okey` **/** `cancel`').then(x => {
  let filtre = mes => mes.author.id === message.author.id;   
   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
     if(collected.first().content === "cancel") { 
  x.edit('it is cancelled :x:')  
return
   }
     
    
  if(collected.first().content === "okey") { 
    db.set(`banblock_${message.guild.id}`, 'on')
   x.edit('Okay! Ban Block system is currently active')
   message.guild.owner.send('Ban Block system actived by `'+message.author.username+'`')
  }
    let yer;
    if(collected.first().content === "okey") yer = 'on'
    if(collected.first().content === "cancel") yer = 'off' 
  if(!yer) return message.channel.send('You have set an incorrect value.')
   })
   })
 }         
        
              
if(geçerli === 'off') {
 
  if(!veri) return message.channel.send('Apparently the system is already disabled.')
  message.channel.send('Okay! Ban Block system is currently disabled')
   db.delete(`banblock_${message.guild.id}`)
  message.guild.owner.send('Ban Block system disabled by `'+message.author.username+'`')
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
        message.reply('When you turn on this system, members who do not have **"ADMINISTRATOR"** permissions will not ban members by right-clicking. \n\n `okey` **/** `cancel`').then(x => {
  let filtre = mes => mes.author.id === message.author.id;   
   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "okey") { 
   db.set(`banblock_${message.guild.id}`, 'on')
   x.edit('Okay! Ban Block system is currently active')
      message.guild.owner.send('Ban Block system actived by `'+message.author.username+'`')

   }
         let yer;
    if(collected.first().content === "okey") yer = 'on'
     if(collected.first().content === "cancel") yer = 'off' 
  if(!yer) return message.channel.send('You have set an incorrect value.') 
   })
   })
 } 
   
        
    
    if(collected.first().content === "off") { 
           
           if(!veri) return message.channel.send('Apparently the system is already disabled.') 
           message.channel.send('Okay! Ban Block system is currently disabled')
           db.delete(`banblock_${message.guild.id}`)
           message.guild.owner.send('Ban Block system disabled by `'+message.author.username+'`')
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
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ban-block',
  description: 'taslak', 
  usage: 'ban-block'
};
