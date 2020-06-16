const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 let veri = await db.fetch(`küfür_${message.guild.id}`)  
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
  message.reply('Please,send your channel a value \n\n `on` **/** `off`')
 
  
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {

           if(collected.first().content === "off") {  
           if(!veri) return message.channel.send('Apparently the system is already disabled.') 
           message.channel.send('Okay! Bad Word protection system is currently disabled')
           db.delete(`küfür_${message.guild.id}`)
         message.guild.owner.send('Bad Word protection system disabled by `'+message.author.username+'`')
         }
    
 
    
    
    
    if(collected.first().content === "on") {      
      
           message.channel.send("Okay! Bad Word protection system is currently active.Now let's make the settings \n\n -What punishment should the advertiser be given? \n\n `mute` **/** `ban` **/** `kick` **/** `message delete` **/** `warn`")    
     
   
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
 let ceza;
    if(collected.first().content === "mute") ceza = 'mute'
    if(collected.first().content === "ban") ceza = 'ban'
    if(collected.first().content === "kick") ceza = 'kick'
    if(collected.first().content === "message delete") ceza = 'message delete'
    if(collected.first().content === "warn") ceza = 'warn'
if(!ceza) return message.reply('The value you specify must be one of the given options.')
    
message.reply('Type `okey` to the channel to confirm or Cancel to `cancel`. \n\n » Penalty: **'+ceza+'** \n » System: **active**').then(s => {
   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
if(collected.first().content === "okey") {
s.edit('Approved :heavy_check_mark: ')  
db.set(`küfür_${message.guild.id}`, 'on')
db.set(`küfürceza_${message.guild.id}`, ceza)
 message.guild.owner.send('Bad Word protection system actived by `'+message.author.username+'`')    
  return
} 
if(collected.first().content === "cancel") {
  s.edit('it is cancelled :x:')  
return
} 
     let yer;
    if(collected.first().content === "okey") yer = 'on'
     if(collected.first().content === "cancel") yer = 'off' 
  if(!yer) return message.channel.send('You have set an incorrect value.')
   
   })


})  
})
    
    }
        
    


  
  })

  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['word-p', 'word-blocker'], 
  permLevel: 4
};

exports.help = {
  name: 'word-protector',
  description: 'Spam engel.', 
  usage: 'word-protector'
};
