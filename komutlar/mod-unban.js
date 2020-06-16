const Discord = require('discord.js')
exports.run = async (client , message, args) => {
  
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("I don't think you have enough privileges to use this command.");  
   const user = message.mentions.members.first()

    let member = user || args[0]

  

  
   
    const banlılar = await message.guild.fetchBans(true)
    
    const banlımember = banlılar.find(m => `${m.user.username}#${m.user.discriminator}` === member || m.user.id === member)

    if(!banlımember) return message.channel.send('you need to specify a id.')


message.delete()  

  
  message.channel.send("I'm checking the audit log..").then(s => {

       setTimeout(() => {
     
s.edit('**'+banlımember.user+'** is not un banned now')
    
       }, 4000)
    
  })
  

  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yasakaç', 'unban'], 
  permLevel: 0
};

exports.help = {
  name: 'un-ban',
  description: 'taslak', 
  usage: 'un-ban'
};

