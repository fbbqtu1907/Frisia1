
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 let veri = await db.fetch(`spam_${message.guild.id}`)  
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
           message.channel.send('Okay! Spam protection system is currently disabled')
           db.delete(`spam_${message.guild.id}`)
         message.guild.owner.send('Spam protection system disabled by `'+message.author.username+'`')
         }
    
 
    
    
    
    if(collected.first().content === "on") {      
      
           message.channel.send("Okay! Role protection system is currently active.Now let's make the settings \n\n -What punishment should the spammer be given? \n\n`ban` **/** `kick` **/** `warn`")    
     
   
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
 let ceza;
    if(collected.first().content === "ban") ceza = 'ban'
    if(collected.first().content === "kick") ceza = 'kick'
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
if(!veri) {
db.set(`spam_${message.guild.id}`, 'on')
}
db.set(`spamceza_${message.guild.id}`, ceza)
 message.guild.owner.send('Spam protection system actived by `'+message.author.username+'`')    
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
  aliases: ['spam-p'], 
  permLevel: 4
};

exports.help = {
  name: 'spam-protector',
  description: 'Spam engel.', 
  usage: 'spam-protector'
};
