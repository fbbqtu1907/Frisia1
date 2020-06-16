const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
   let veri = await db.fetch(`toplamuye_${message.guild.id}`)
  
   if(!veri) {
 let embed = new Discord.RichEmbed()
  .setTitle('Oops!')
  .setDescription('a panel set by Jendisa could not be found on the in server.')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('RED')
 message.channel.send(embed).then(x => x.delete(10000))
 message.delete()    
 return
   }
  let dil =  db.fetch(`paneldil_${message.guild.id}`)
  let bot = db.fetch(`bot_${message.guild.id}`)
  let topaktifkanal = db.fetch(`rekoraktif_${message.guild.id}`)
  let topaktif = db.fetch(`rekoraktifs_${message.guild.id}`)
  let aktif = db.fetch(`aktif_${message.guild.id}`) 
  
 if(dil === "tr") {
   let dil =  db.fetch(`paneldil_${message.guild.id}`)
  let bot = db.fetch(`bot_${message.guild.id}`)
  let topaktifkanal = db.fetch(`rekoraktif_${message.guild.id}`)
  let topaktif = db.fetch(`rekoraktifs_${message.guild.id}`)
  let aktif = db.fetch(`aktif_${message.guild.id}`) 
  
let botkanal = message.guild.channels.get(bot)   
let topkanal = message.guild.channels.get(topaktifkanal)   
let aktifkanal = message.guild.channels.get(aktif) 
let topuye = message.guild.channels.get(veri)   

botkanal.setName('Bot ▪ '+message.guild.members.filter(m => m.user.bot).size)   
aktifkanal.setName('Aktif ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size)
topuye.setName('Toplam Üye ▪ '+message.guild.memberCount)

if(message.guild.members.filter(m => m.presence.status !== "offline").size > topaktif) {
topkanal.setName('Rekor Aktif ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size)  

}
message.channel.send('Panel başarıyla yenilendi.! <a:cekic:644054892670877716>').then(m => m.delete(15000)) 
 }
 if(dil === "en") {
 
let botkanal = message.guild.channels.get(bot)   
let topkanal = message.guild.channels.get(topaktifkanal)   
let aktifkanal = message.guild.channels.get(aktif) 
let topuye = message.guild.channels.get(veri)   

botkanal.setName('Bot ▪ '+message.guild.members.filter(m => m.user.bot).size)   
aktifkanal.setName('Online ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size)
topuye.setName('Total Members ▪ '+message.guild.memberCount)

if(message.guild.members.filter(m => m.presence.status !== "offline").size > topaktif) {
topkanal.setName('Record Online ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size)  
  message.channel.send('Panel renewed successfully! <a:cekic:644054892670877716>').then(m => m.delete(15000))  
}

 }  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['panel-refresh', 'refresh-panel'], 
  permLevel: 0
};

exports.help = {
  name: 'panel-refresh',
  description: 'taslak', 
  usage: 'panel-refresh'
};

