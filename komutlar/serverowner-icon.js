const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let bot = message.guild.members.get(client.user.id)
  let isim = args.slice(0).join(' ');
  let eskiresim = message.guild.iconURL
  let destek = "https://www.google.com"
  
  if (message.author.id !== message.guild.owner.id) return message.reply('To use this command, you must be the owner of the "`'+message.guild.name+'`" server.')
  
  if (!bot.hasPermission("MANAGE_GUILD")) return message.channel.send('I need to have **"MANAGE GUİLD"** permissipns to change server icon.');
  
  if(!isim) return message.reply('You must enter a image link')
  if(isim === message.guild.iconURL) return message.reply('The new server icon you specify is the same as the current server icon.')
 
  message.delete()
  let onay = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> | Confirmation:')
  .setDescription('The new icon of the server will be done in the image below. Do you confirm? \n\n `okey` **/** `cancel`')
  .setFooter('Rem Moderations')
  .setColor('RED')
  .setTimestamp()
  .setImage(isim)
  .setURL(destek)
  message.channel.send(onay).then(t => {

    
    let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 40000,
          errors: ["time"]
        })
        .then(collected => {
  
    
  if(collected.first().content === "cancel") {
  t.delete()
    message.channel.send('it is cancelled :x:')  
return
} 

    if(collected.first().content === "okey") { 
  
      message.guild.setIcon(isim)
      t.delete()   
     let başarılı = new Discord.RichEmbed()
  .setTitle('<a:isikli:642696382414585856> | Transaction successful!')
  .setDescription("[Last İcon]("+eskiresim+") **⪢** [New İcon]("+isim+")")
  .setColor('GREEN')
  .setFooter('Rem Moderations')
  .setTimestamp()
  .setImage(eskiresim)
  .setThumbnail(isim)
  .setURL(destek)
  message.channel.send(başarılı).then(s => {   
  s.react('633993795066658832')
  s.delete(30000)  
  })  

    }
 
      let yer;
    if(collected.first().content === "okey") yer = 'on'
     if(collected.first().content === "cancel") yer = 'off' 
  if(!yer) return message.channel.send('You have set an incorrect value.') 
  
  })

  })
                                  
  //message.guild.setName(isim)
  
  

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sunucu-resmi', 's-icon'], 
  permLevel: 0
};

exports.help = {
  name: 'server-icon',
  description: 'taslak', 
  usage: 'server-icon'
};
