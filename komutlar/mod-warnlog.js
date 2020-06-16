 
    const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let dil = await db.fetch(`warndil_${message.guild.id}`)
let uyarıneden = await db.fetch(`warnneden_${message.guild.id}`)
let uyarıdm = await db.fetch(`warndm_${message.guild.id}`)
let uyarılogs = await db.fetch(`warnlog_${message.guild.id}`)
  if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   
  if(dil) {
  
  let kanal = message.mentions.channels.first() 
  if(!kanal) return message.channel.send(':x: | İşlem devamı için bir kanal belirtmeniz gerekiyor.')
  
kanal.send('**Jendisa** » Uyarı logları artık bu kanalda belirtilecek.')    
 
 message.channel.send('Uyarı kayıtları artık <#'+kanal.id+'> Kanalına gönderilecek.')   
    
 db.set(`warnlog_${message.guild.id}`, kanal.id)   
  return
  }
  
  
    let kanal = message.mentions.channels.first() 
  if(!kanal) return message.channel.send(':x: | You must specify a channel to continue the process.')
  
kanal.send('**Jendisa** » Alert logs will now be specified on this channel.')    
 
 message.channel.send('Alert logs will now be sent to Channel <#'+kanal.id+'>')   
    
 db.set(`warnlog_${message.guild.id}`, kanal.id)   
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-log'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-log',
  description: 'taslak', 
  usage: 'warn-log'
};
