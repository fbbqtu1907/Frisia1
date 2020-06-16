const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");


  
  let channel = message.mentions.channels.first()
  
  if(!channel) return message.channel.send('you must specify a channel to continue processing')
  
  let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Specify the records that you want to appear in the log channel.")
  .addBlankField()
  .addField(':question: Example', '<message-logs>,<spam-logs>,<ad-logs>,<server-protection>,<moderation-logs>')
  .addBlankField()
  .addField('Logs', '» <message-logs> \n » <spam-logs> \n » <ad-logs> \n » <server-protection> \n » <moderation-logs> \n » <guild-logs>')
  .addBlankField()
  .addField('Information', 'if you want them all, just type "all"')
  .setTimestamp()
  .setColor('GREEN')
  message.channel.send(tamamdır)
  
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   
if(collected.first().content === "all") { 
db.set(`mesajlogları_${message.guild.id}`, 'on')
db.set(`spamlogları_${message.guild.id}`, 'on')  
db.set(`reklamlogları_${message.guild.id}`, 'on')   
db.set(`korumalogları_${message.guild.id}`, 'on')
db.set(`moderasyonlogları_${message.guild.id}`, 'on')
db.set(`mesajlogları_${message.guild.id}`, 'on')  
db.set(`modlog_${message.guild.id}`, channel.id) 
  message.channel.send('All logs are activated!')

  return 
}  
if(collected.first().content === "off") { 
db.delete(`mesajlogları_${message.guild.id}`)
db.delete(`spamlogları_${message.guild.id}`)  
db.delete(`reklamlogları_${message.guild.id}`)   
db.delete(`korumalogları_${message.guild.id}`)
db.delete(`moderasyonlogları_${message.guild.id}`)
db.delete(`mesajlogları_${message.guild.id}`)  
db.delete(`modlog_${message.guild.id}`) 
  message.channel.send('All logs are deleted.!')

  return 
}     
    
    let hı;
    if((collected.first().content).includes('<message-logs>')) {
      db.set(`mesajlogları_${message.guild.id}`, 'on')
    hı = 'ok'
    }
    if((collected.first().content).includes('<spam-logs>')) {
      db.set(`spamlogları_${message.guild.id}`, 'on')
    hı = 'ok'
    }
    if((collected.first().content).includes('<ad-logs>')) {
      db.set(`reklamlogları_${message.guild.id}`, 'on')
    hı = 'ok'
    }
    if((collected.first().content).includes('<server-protection>')) {
      db.set(`korumalogları_${message.guild.id}`, 'on')
    hı = 'ok'
    }
    if((collected.first().content).includes('<moderation-logs>')){
      db.set(`moderasyonlogları_${message.guild.id}`, 'on')
    hı = 'ok'
    }
    
    if((collected.first().content).includes('<guild-logs>')) {
     
   hı = 'ok'
    }
    if(!hı) return message.channel.send("I couldn't find any logs at the specified value. I need at least 1")
    
message.channel.send('process completed! Active logs: ```'+collected.first().content+'```')
message.guild.owner.send('Logs activated by `'+message.member.user.username+'`')  
db.set(`modlog_${message.guild.id}`, channel.id)   
  })
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['logs'], 
  permLevel: 0
};

exports.help = {
  name: 'mod-log',
  description: 'taslak', 
  usage: 'mod-log'
};
