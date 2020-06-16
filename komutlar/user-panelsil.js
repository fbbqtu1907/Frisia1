const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
   let veri =  db.fetch(`toplamuye_${message.guild.id}`)
  
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
   
   if(!veri) {
   let embed = new Discord.RichEmbed()
  .setTitle('Hata :(!')
  .setDescription('Sunucu içinde Jendisa tarafından ayarlanmış panel bulunamadı.!')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('RED')
 message.channel.send(embed).then(x => x.delete(10000))
 message.delete()    
 return
   }
  
 message.channel.send('Sunucuda ayarlanmış panel,Rekor Aktif değeri silinecek.Emin misiniz? \n\n `evet` **/** `iptal`').then(t =>{
   
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
  let m;
  if(collected.first().content === "evet") m = ','
  if(collected.first().content === "iptal") m = ','
  if(!m) return message.channel.send('You have not entered a correct option.')
    
    
    if(collected.first().content === "iptal") {
t.delete()
message.channel.send('İptal edildi! :x:')     
  return
   }
     if(collected.first().content === "evet") {
t.delete()
 let embed = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | Başarılı!')
  .setDescription('Sunucu paneli ve kayıtlı veriler temizlendi.!')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('BLUE')
 message.channel.send(embed).then(x => x.delete(10000))  
  
 message.guild.channels.get(bot).delete() 
 message.guild.channels.get(topaktifkanal).delete() 
 message.guild.channels.get(aktif).delete()       
 message.guild.channels.get(veri).delete()        
       
db.delete(`paneldil_${message.guild.id}`)       
db.delete(`bot_${message.guild.id}`)
db.delete(`rekoraktif_${message.guild.id}`)
db.delete(`rekoraktifs_${message.guild.id}`)       
db.delete(`aktif_${message.guild.id}`)       
       return
   }   
  })
 })
   
 }
  
  if(dil === "en") {
 message.channel.send('The set panel on the server, the Record Online value will be deleted completely. Are you sure? \n\n `yes` **/** `cancel`').then(t => {
   
  let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
  let m;
  if(collected.first().content === "cancel") m = ','
  if(collected.first().content === "yes") m = ','
  if(!m) return message.channel.send('You have not entered a correct option.')
    
    
    if(collected.first().content === "cancel") {
t.delete()
message.channel.send('its Canceled :x:')     
  return
   }
     if(collected.first().content === "yes") {
t.delete()
 let embed = new Discord.RichEmbed()
  .setTitle('<a:verifed:633993795066658832> | Successful!')
  .setDescription('Server panel and saved data cleared.!')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('BLUE')
 message.channel.send(embed).then(x => x.delete(10000))  
  
 message.guild.channels.get(bot).delete() 
 message.guild.channels.get(topaktifkanal).delete() 
 message.guild.channels.get(aktif).delete()       
 message.guild.channels.get(veri).delete()        
       
db.delete(`paneldil_${message.guild.id}`)       
db.delete(`bot_${message.guild.id}`)
db.delete(`rekoraktif_${message.guild.id}`)
db.delete(`rekoraktifs_${message.guild.id}`)       
db.delete(`aktif_${message.guild.id}`)       
       return
   }   
  })
   
   
 })
 }

 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'panel-delete',
  description: 'taslak', 
  usage: 'panel-delete'
};

