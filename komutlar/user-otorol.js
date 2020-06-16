const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
  let bots = message.guild.members.get(client.user.id)
  
  
    let yok = new Discord.RichEmbed()
  .setTitle(':x: Oops :(!')
  .setDescription('Jendisa requires **"MANAGE ROLES"** authority to add role.')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://google.com')
  .setColor('RED')

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  if (!bots.hasPermission("MANAGE_ROLES")) return message.channel.send(yok).then(t => t.delete(15000))

  if(args[0] === "off") {
let veri = await db.fetch(`otorol_${message.guild.id}`)
    
    
    if(!veri) return message.channel.send('Apparently the system is already disabled.') 
           message.channel.send('Okay!  system is currently disabled')
           db.delete(`otorol_${message.guild.id}`)  
          db.delete(`otobot_${message.guild.id}`) 
    return
  }
  

  let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Specify which role the bot add role to user on your channel.")
  .addBlankField()
  .addField(':question: Example:', '**@member** `/` **653278579127353354 (role İD)**')
  .addField('System:', '» **System**: `ON` \n\n **User Role:** `not specified` \n\n **Bot Role**: `not specified`')  
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('BLUE')
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
  
    
    collected.first().delete()  
let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Specify which role the bot add role to **bots** on your channel.")
  .addBlankField()
  .addField(':question: Example:', '**@bots** `/` **653278579127353354 (role İD)**')
  .addField('System:', '» **System**: `ON` \n\n **User Role:** <@&'+rol.id+'> \n\n **Bot Role**: `not specified`')  
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('RED')
t.edit(tamamdır)
 message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
let bot = collected.first().mentions.roles.first() || message.guild.roles.get(collected.first().content)
if(!bot) {
  
t.delete()
collected.first().react('❌')  
message.channel.send('The role you specified was not found on the server.').then(t => t.delete(10000))
return
}
   
let ss = new Discord.RichEmbed()
  .setTitle('<a:basarl:626445944258560012> | Successful!')
  .setDescription('outo-role successfully implemented.')
  .addBlankField()
  .addField('<a:cekic:644054892670877716> User Role İnfo:', '**Role:** <@&'+rol.id+'> \n **Role İD:** `'+rol.id+'` \n **Number of members on the server with this role:** `'+message.guild.roles.get(rol.id).members.size+'`')
  .addBlankField()
  .addField('\:hyper2: Bots Role İnfo:', '**Role:** <@&'+bot.id+'> \n **Role İD:** `'+bot.id+'` \n **Number of members on the server with this role:** `'+message.guild.roles.get(bot.id).members.size+'`')
  .setFooter('Jendisa', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('RED')

t.edit(ss)
t.react('638111145328246804')    
collected.first().delete()    
message.guild.owner.send('**User** Oto-role: **'+rol.name+'** \n\n **Bot** Oto-role: **'+bot.name+'**') 
db.set(`otorol_${message.guild.id}`, rol.id)       
db.set(`otobot_${message.guild.id}`, bot.id)     
   
 })
    
  })
  })

  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['oto-rol'], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol',
  description: 'taslak', 
  usage: 'outo-role'
};
