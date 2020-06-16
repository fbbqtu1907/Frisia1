const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  

let veri = await db.fetch(`captchazorluk_${message.guild.id}`) 

if(!veri) return message.reply('Apparently the system is already disabled.')

db.delete(`captchazorluk_${message.guild.id}`) 
db.delete(`captcharol_${message.guild.id}`)
db.delete(`captchadil_${message.guild.id}`)   

message.channel.send('Okay! captcha protection system is currently disabled.!')  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'captcha-off',
  description: 'taslak', 
  usage: 'captcha-off'
};
