const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if(args[0] === "tr") {
     message.reply('Beni gerçekten yeniden başlatmak istiyor musun? \n\n `evet` **/** `hayır`').then(a => {
  
    let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "hayır") {
     a.delete()
     message.reply('Ne çabuk pes ettin?')
  return
   }
     
    
    if(collected.first().content === "evet") {
     message.reply('Beni inanılmaz imkansız bir şekilde yeniden mi başlatmak istiyorsun? \n\n `evet inanılmaz!` **/** `pes ettim`').then(a => {
       message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
         if(collected.first().content === "pes ettim") {
     a.delete()
     message.reply("Pes etsende buraya kadar gelmen de başarıdır!")
  return
   }   
          if(collected.first().content === "evet inanılmaz!") {
     a.delete()
      message.reply('beni yeniden başlatabilceğine inanıyor musun? \n\n `Evet, kendime güveniyorum!` **/** `Sen beni mi kandırıyorsun?`').then(a => {
     
 message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
       
          
          if(collected.first().content === "Evet, kendime güveniyorum!") {
    a.delete()
    message.reply("Tamam,kendine bu kadar güvenmene ve durmadan beni yeniden başlatmaya çalışmanı sevdim ancak şu an kendimi yeniden başlatamayacak kadar yorgunum..")       
        }
              if(collected.first().content === "Sen beni mi kandırıyorsun?") {
    a.delete()
    message.reply("**EVET!** XD")       
              }
        })
              })
}
       })
     })
    }
  })
  })
  return
  }
  message.reply('Do you really want to restart me? \n\n `yes` **/** `no`').then(a => {
  
    let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "no") {
     a.delete()
     message.reply('How quickly did you give up?')
  return
   }
     
    
    if(collected.first().content === "yes") {
     message.reply('Do you want to restart me in an incredibly impossible way?? \n\n `yes amazing!` **/** `I give up`').then(a => {
       message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
         if(collected.first().content === "I give up") {
     a.delete()
     message.reply("At least you've tried a little, which is a success!")
  return
   }   
          if(collected.first().content === "yes amazing!") {
     a.delete()
      message.reply('do you believe you can do that? \n\n `Yes, I trust myself!` **/** `Are you fooling me?`').then(a => {
     
 message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
       
          
          if(collected.first().content === "Yes, I trust myself!") {
    a.delete()
    message.reply("Look, I'm glad you're so confident, but I'm too tired to do that right now, maybe later?")       
        }
              if(collected.first().content === "Are you fooling me?") {
    a.delete()
    message.reply("**YES!** XD")       
              }
        })
              })
}
       })
     })
    }
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
  name: 'reboot',
  description: 'taslak', 
  usage: 'reboot'
};
