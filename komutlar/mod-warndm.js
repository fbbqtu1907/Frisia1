const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let dil = await db.fetch(`warndil_${message.guild.id}`)


  if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   
  if(dil) {
    
message.channel.send('Bu özellik aktifleştirildiğinde kullanıcıya **DM** yoluyla uyarı nedeni ve uyarı sayısını bildirir.Onaylıyor musunuz? \n\n `onaylıyorum` **/** `iptal`').then(m => {
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
 
 message.channel.send('✅ | Artık kullanıcılara **DM** üzerinden uyarı raporu gönderilecek.')   
 m.delete()   
 db.set(`warndm_${message.guild.id}`, 'açık')   
  })
    })
   
  return  
  }
  
message.channel.send('When this feature is activated, it informs the user of the reason for and the number of alerts via **DM**. Do you confirm? \n\n `confirm` **/** `cancel`').then(m => {
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
 
 message.channel.send('✅ | Alert reports will now be sent to users via **DM**')   
 m.delete()   
 db.set(`warndm_${message.guild.id}`, 'açık')   
  })
    })
     
  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-dm-log'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-dm-log',
  description: 'taslak', 
  usage: 'warn-dm-log'
};
