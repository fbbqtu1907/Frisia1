const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let dil = await db.fetch(`warndil_${message.guild.id}`)


  if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   
  if(dil) {
    
if(args[0] === "kapat") {
  
  message.channel.send(':x: Neden ekleme zorunluluğu devre dışı bırakıldı.')
  db.delete(`warnneden_${message.guild.id}`)
  
  return
}
    
    
    
    
    
    message.channel.send('Bu özelliği aktifleştirdiğiniz taktirde kullanıcılara uyarı atan kişilerden bir sebep girmesini zorunlu kılacak.Onaylıyor musunuz? \n\n `onaylıyorum` **/** `iptal`').then(m => {
     let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "onaylıyorum") x = ','
 if(collected.first().content === "iptal") x = ','  
 if(!x) return message.channel.send(':x: Yanlış bir seçenek girdiniz.')   
 
 if(collected.first().content === "iptal") {
  message.channel.send(':x: İşlem iptal edildi.')    
m.delete() 
   return
 }
 
 message.channel.send('✅ | Uyarı sebebine neden eklemek zorunlu hale getirildi. ')   
 m.delete()   
 db.set(`warnneden_${message.guild.id}`, 'zorunlu')   
  })
    })
   
  return  
  }
  
if(args[0] === "off") {
  
  message.channel.send(':x: Neden ekleme zorunluluğu devre dışı bırakıldı.')
  db.delete(`warnneden_${message.guild.id}`)
  
  return
}
  
  message.channel.send('If you activate this feature, it will force moderators to enter a reason for warning users. Do you confirm? \n\n `confirm` **/** `cancel`').then(m => {
     let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "confirm") x = ','
 if(collected.first().content === "cancel") x = ','  
 if(!x) return message.channel.send(':x: You have entered an invalid value.')   
 
 if(collected.first().content === "cancel") {
  message.channel.send(':x: Canceled')    
m.delete() 
   return
 }
 
 message.channel.send('✅ | It is now mandatory to add a reason for the warning.')   
 m.delete()   
 db.set(`warnneden_${message.guild.id}`, 'zorunlu')   
  })
    })
     
  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-nedeni'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-reason',
  description: 'taslak', 
  usage: 'warn-reason'
};
