const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
if(message.content === "r!sil") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komutu kullanabilmek için yeterli yetkiye sahip olduğunu sanmıyorum.");    
  
let sayı = args[0]  

if(sayı) {
 if(isNaN(args[0])) return message.reply('Mesaj silebilmem için bir sayı belirtmelisin.').then(s => s.delete(5000))
 if(sayı < 0) return message.reply('belirttiğiniz sayı `0` dan büyük olmalı.').then(s => s.delete(5000))
 if(sayı > 100) return message.reply('Sistem tek seferde max `100` mesaj silebilir.').then(s => s.delete(5000))
 
message.channel.bulkDelete(sayı);
  
  
   message.channel.send('`'+sayı+'` Kadar mesaj (<@'+message.author.id+'>) tarafından silindi.! <a:trash:659005751506894851>').then(s => s.delete(15000))   

}
  if(!sayı) {
  message.channel.send('Bulunduğunuz kanala silmek istediğiniz mesaj miktarını gönderin.')  
     let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
let sayı = collected.first().content    
 if(isNaN(sayı)) return message.reply('Mesaj silebilmem için bir sayı belirtmelisin.').then(s => s.delete(5000))
 if(sayı < 0) return message.reply('belirttiğiniz sayı `0` dan büyük olmalı.').then(s => s.delete(5000))
 if(sayı > 100) return message.reply('Sistem tek seferde max `100` mesaj silebilir.').then(s => s.delete(5000)) 
 
 message.channel.bulkDelete(sayı)
   message.channel.send('`'+sayı+'` Kadar mesaj (<@'+message.author.id+'>) tarafından silindi.! <a:trash:659005751506894851>').then(s => s.delete(15000))   


  })
  }
  
} else {
  
  
  
  
  
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't think you have enough privileges to use this command.");    
  
let sayı = args[0]  

if(sayı) {
 if(isNaN(args[0])) return message.reply('To delete message, you must specify a number.').then(s => s.delete(5000))
 if(sayı < 0) return message.reply('You cannot specify a big number from `0`').then(s => s.delete(5000))
 if(sayı > 100) return message.reply('Message deletion amount is set to max `100`').then(s => s.delete(5000))
 
message.channel.bulkDelete(sayı);
  
  
   message.channel.send('`'+sayı+'` Messages deleted by (<@'+message.author.id+'>) <a:trash:659005751506894851>').then(s => s.delete(15000))   

}
  if(!sayı) {
  message.channel.send('send the number of messages you want to delete to your current channel.')  
     let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
let sayı = collected.first().content    
 if(isNaN(sayı)) return message.reply('To delete message, you must specify a number.').then(s => s.delete(5000))
 if(sayı < 0) return message.reply('You cannot specify a big number from `0`').then(s => s.delete(5000))
 if(sayı > 100) return message.reply('Message deletion amount is set to max `100`').then(s => s.delete(5000))    
 
 message.channel.bulkDelete(sayı)
     message.channel.send('`'+sayı+'` Messages deleted by (<@'+message.author.id+'>) <a:trash:659005751506894851>').then(s => s.delete(15000))   


  })
  }
}  
};
  
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['delete', 'sil'], 
  permLevel: 0
};

exports.help = {
  name: 'clear',
  description: 'taslak', 
  usage: 'clear'
};

