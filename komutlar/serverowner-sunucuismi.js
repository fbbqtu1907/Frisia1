const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let bot = message.guild.members.get(client.user.id)
  let isim = args.slice(0).join(' ');
  let eskiisim = message.guild.name
  let destek = "https://www.google.com"
  
  if (message.author.id !== message.guild.owner.id) return message.reply('To use this command, you must be the owner of the "`'+message.guild.name+'`" server.')
  
  if (!bot.hasPermission("MANAGE_GUILD")) return message.channel.send('I need to have **"MANAGE GUİLD"** permissipns to change server name');
  
  if(!isim) return message.reply('you must type the new server name!')
  if(isim.length > 100) return message.reply('the number of characters specified should not exceed 100!')
  if(isim === message.guild.name) return message.reply('The new server name you specify is the same as the current server name.')
  
  message.guild.setName(isim)
  
  
  let başarılı = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> | Transaction successful!')
  .setDescription('```'+eskiisim+' ⪢ '+isim+'```')
  .setColor('GREEN')
  .setFooter('Jendisa')
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setURL(destek)
  message.channel.send(başarılı).then(s => {
    
  s.react('633993795066658832')
  s.delete(30000)  
    
    
  })
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sunucu-ismi', 's-name'], 
  permLevel: 0
};

exports.help = {
  name: 'server-name',
  description: 'taslak', 
  usage: 'server-name'
};
