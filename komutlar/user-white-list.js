const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  
 let tamamdır = new Discord.RichEmbed()
  .setTitle("<a:uyari:641250116165959698> Warning!")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("the role you choose will not get caught in **any protection** system!")
  .addBlankField()
  .addField(':question: Example:', '**@Logger** `/` **653278579127353354 (role İD)**')
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('RED')
  message.channel.send(tamamdır).then(t => {
 let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
let rol = collected.first().mentions.roles.first() || message.guild.roles.get(collected.first().content)
if(!rol) {
  
t.delete()
collected.first().react('❌')  
message.channel.send('The role you specified was not found on the server.').then(t => t.delete(10000))
return
}
  
 if(rol.hasPermission("ADMINISTRATOR")) {
t.delete()
collected.first().react('❌')  
message.channel.send('The role you selected is not already caught on security systems.')   
 return  
 } 
 collected.first().delete()   
let embed = new Discord.RichEmbed()
.setTitle('<a:basarl:626445944258560012> | Sucessfuly!')
.setDescription('<@&'+rol.id+'> Added **White List**!')
.setColor('GREEN')
.setFooter('Rem Moderations', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
t.edit(embed)    

db.delet(`yakalanmıcak_${message.guild.id}`, rol.id)  
  
  
  })
  })
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['beyaz-liste'], 
  permLevel: 0
};

exports.help = {
  name: 'white-list',
  description: 'taslak', 
  usage: 'white-list'
};
