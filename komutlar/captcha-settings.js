const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  

let zorluk = await db.fetch(`captchazorluk_${message.guild.id}`) 
let rol = await db.fetch(`captcharol_${message.guild.id}`)
let dil = await db.fetch(`captchadil_${message.guild.id}`)   
if(!zorluk) return message.reply('the system is disabled.')

if(message.content === "r!captcha-ayarlar") {

   let adım3 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Sistem Ayarları!')
.addBlankField()
.addField('System', 'Rol **»** <@&'+rol+'> \n\n Zorluk Seviyesi **»** `'+zorluk+'` \n\n Sistem Dili **»** `'+dil+'`')
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
message.channel.send(adım3)
  
  
  
  return  
}
  
   let adım3 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || System İnfo!')
.addBlankField()
.addField('System', 'Add Role **»** <@&'+rol+'> \n\n Difficulty Level **»** `'+zorluk+'` \n\n System Language **»** `'+dil+'`')
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
message.channel.send(adım3)
  


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-ayarlar'], 
  permLevel: 0
};

exports.help = {
  name: 'captcha-settings',
  description: 'taslak', 
  usage: 'captcha-settings'
};
