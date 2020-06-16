const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let bot = message.guild.members.get(client.user.id)  
  

  let yok = new Discord.RichEmbed()
  .setTitle(':x: Oops :(!')
  .setDescription('Jendisa requires **"MANAGE NICKNAMES"** authority to edit names.')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://google.com')
  .setColor('RED')

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  if (!bot.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(yok).then(t => t.delete(15000))

 
let embed = new Discord.RichEmbed()
  let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Now, you need to specify what I to edit the names how.( **<.>** ) specifies the name of the user.")
  .addBlankField()
  .addField(':question: Example:', '✵ <.>')
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
    let x = collected.first().content
  
 let onay = x.replace("<.>", client.user.username)
 
 t.delete()
 message.channel.send('**---------------------** \n\n The sample conversion is now the name of the jendisa bot. \n\n **---------------------** \n Do you accept? \n\n `yes` **/** `cancel`').then(m => {
  let user = message.guild.members.get(client.user.id)

user.setNickname(onay) 
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 40000,
          errors: ["time"]
        })
        .then(collected => {
    let yer;
    if(collected.first().content === "yes") yer = 'on'
    if(collected.first().content === "cancel") yer = 'off' 
  if(!yer) return message.channel.send('You have set an incorrect value.')

 if(collected.first().content === "yes") {
  
collected.first().delete()
m.edit('Mission completed!')   


user.setNickname(client.user.username)

db.set(`ototag_${message.guild.id}`, x)   
 
 }
  
if(collected.first().content === "cancel") {
  
collected.first().delete()
m.edit('its Canceled :x:')   
user.setNickname(client.user.username)
  return  
  
}
  
  })
   
   
 }) 
    
    
    })
  
  })
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'oto-tag',
  description: 'taslak', 
  usage: 'oto-tag'
};

