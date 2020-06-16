const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
       
  
let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let dil = await db.fetch(`warndil_${message.guild.id}`)


  if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   
  if(dil) {
    
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Uyarı silebilmek için yeterli yetkiye sahip değilsin.").then(s => s.delete(13000))
 
  
 let user = message.mentions.users.first() || message.guild.members.get(args[0])
 let sayı = args[1] 
 
 
 
 if(!user) return message.channel.send(':x: Uyarısını sileceğin kullanıcıyı belirtmelisin. \n\n **»** `r!uyarı-sil @YasinN_ 3`').then(s => s.delete(13000))
 
    let uyarı = await db.fetch(`warnsayı_${user.id}_${message.guild.id}`)
 
    if(!uyarı) return message.channel.send(':x: **'+user.username+'** adlı kullanıcının hiç uyarısı bulunmuyor.').then(s => s.delete(13000))
    
  if(!sayı) return message.channel.send(':x: **'+user.username+'** Adlı kullanıcının ne kadar uyarısını silmek istediğinizi belirtmelisiniz. \n\n **»** `r!uyarı-sil @YasinN_ 3`').then(s => s.delete(13000))
 
 if(isNaN(sayı)) return message.channel.send(':x: Belirttiğiniz; **'+sayı+'** bir sayıya benzemiyor,Bir sayı girmelisiniz.').then(s => s.delete(13000))
  
if(sayı < 1) return message.channel.send(':x: Silmek istediğiniz uyarı sayısı `1` den küçük olamaz.').then(s => s.delete(13000))  
 
 if(sayı > uyarı) return message.channel.send(':x: yazdığınız sayı **'+user.username+'** adlı kullanıcının uyarı sayısından fazla şu an **'+uyarı+'** kadar uyarısı bulunuyor.').then(s => s.delete(13000))
 
 message.delete()

    let işlem = uyarı - sayı
    
    message.channel.send('**'+user.username+'** adlı kullanıcının **'+sayı+'** kadar uyarısı silindi! Artık `'+ işlem +'` uyarısı bulunuyor. <a:verifed:633993795066658832>') 
 
db.add(`warnsayı_${user.id}_${message.guild.id}`, - sayı)  
  return
  }
 
  //EN
  
  
  
  
  
   if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   

    
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have enough authority to delete a warning.").then(s => s.delete(13000))
 
  
 let user = message.mentions.users.first() || message.guild.members.get(args[0])
 let sayı = args[1] 
 
 
 
 if(!user) return message.channel.send(':x: You must specify the user to delete a warn from. \n\n **»** `r!warn-delete @YasinN_ 3`').then(s => s.delete(13000))
 
    let uyarı = await db.fetch(`warnsayı_${user.id}_${message.guild.id}`)
 
    if(!uyarı) return message.channel.send(':x: **'+user.username+'** has no warnings.').then(s => s.delete(13000))
    
  if(!sayı) return message.channel.send(':x: **'+user.username+'**  You must specify how many warn want to delete. \n\n **»** `r!warn-delete @YasinN_ 3`').then(s => s.delete(13000))
 
 if(isNaN(sayı)) return message.channel.send(':x: Your specify; If **'+sayı+'**  not like a number. you must enter a number.').then(s => s.delete(13000))
  
if(sayı < 1) return message.channel.send(':x: The number of warnings you want to delete cannot be less than `1`').then(s => s.delete(13000))  
 
 if(sayı > uyarı) return message.channel.send(':x: number you typed **'+user.username+'** Your specify; number bigger than user warnings.Has own **'+uyarı+'** warnings').then(s => s.delete(13000))
 
 message.delete()

    let işlem = uyarı - sayı
    
    message.channel.send('**'+user.username+'** **'+sayı+'** warning has been deleted! There are now **'+işlem+'** warnings. <a:verifed:633993795066658832>') 
 
db.add(`warnsayı_${user.id}_${message.guild.id}`, - sayı)   
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-sil'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-delete',
  description: 'taslak', 
  usage: 'warn-delete'
};
