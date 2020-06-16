const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let dil = await db.fetch(`warndil_${message.guild.id}`)
let uyarıneden = await db.fetch(`warnneden_${message.guild.id}`)

  if(!veri) return message.channel.send('**en:** You must activate the system before activating this feature. `=>` **r!warn-on** \n\n **tr:** Bu özelliği aktifleştirmeden önce,sistemi aktifleştirmen gerekiyor. `=>` **r!uyarı-aç**')  
   
  if(dil) {
   if(args[0] === "kapat") {
  
  message.channel.send(':x: warn limit sistemi devre dışı bırakıldı.')
  db.delete(`warnlimit_${message.guild.id}`)
    db.delete(`warnlimitceza_${message.guild.id}`)

  return
}
 let embed = new Discord.RichEmbed()   
.setTitle('<a:cekic:644054892670877716> || Warn limit nedir?')
.setDescription('Üyeler belirttiğiniz uyarı sayısına ulaşırsa birazdan seçeceğiniz cezayı bot uygular.Bu sistemin aktif edilmesi tavsiye edilir,aksi takdirde üyeler ne kadar uyarı alsa da bot bir ceza işlemi uygulamaz.') 
.addBlankField()
.addField('<a:google:635846373052383243> Biraz bekleyin', 'Sizin için bazı şeyleri hazırlıyoruz..') 
.setColor('RED') 
.setFooter('Rem Moderations', client.user.avatarURL)    
message.channel.send(embed).then(s => {
  
 setTimeout(() => {
 
  let embed = new Discord.RichEmbed()   
.setTitle('Uyarı Limiti')
.setDescription('Kullanıcının kaç uyarıda belirttiğiniz cezayı almasını istiyorsunuz? `1-20` __arasında__ bir değer belirtmelisin.') 
.setColor('BLUE') 
.setFooter('Rem Moderations', client.user.avatarURL)    
s.edit(embed).then(x => {  
   
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
  if(isNaN(collected.first().content)) return message.reply('`0-20` arasında bir sayı değeri belirtmelisiniz.').then(s => s.delete(5000))
 if(collected.first().content < 1) return message.reply('belirttiğiniz limit `1` den büyük olmalı.').then(s => s.delete(5000))
 if(collected.first().content > 20) return message.reply('belirttiğiniz limit `20` den küçük olması gerekiyor.').then(s => s.delete(5000)) 
   
    let limit = collected.first().content
   let embed = new Discord.RichEmbed()   
.setTitle('Uyarı Cezası')
.setDescription('Kullanıcı **'+collected.first().content+'** uyarı sayısına ulaştığında verilecek cezayı aşağıdaki seçeneklere göre seçin.') 
.addBlankField()
.addField(':star: | Cezalar', '**»** ban \n\n **»** kick')
.setColor('BLUE') 
.setFooter('Rem Moderations', client.user.avatarURL)    
x.delete()
   message.channel.send(embed).then(m => {     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
    
  let ceza;
    if(collected.first().content === "ban") ceza = 'ban'
    if(collected.first().content === "kick") ceza = 'kick'
  if(!ceza) return message.channel.send('Yanlış bir seçenek belirttiniz.')  
  
  m.delete()
 message.channel.send('Sistem kurulumu tamamlandı! \n\n **Uyarı Limit** » `'+limit+'` \n **Limit Cezası** » `'+collected.first().content+'`') 

 db.set(`warnlimit_${message.guild.id}`, limit)   
   db.set(`warnlimitceza_${message.guild.id}`, collected.first().content)   
  
    
    
  })
  })
  
  })
  })
 
   
   }, 6000) 
  
  
  
  
})
 
 return
  }
  if(!dil) {

  
  ///////////////////////////////////////// EN
     if(args[0] === "off") {
  
  message.channel.send(':x: warn limit sistemi devre dışı bırakıldı.')
  db.delete(`warnlimit_${message.guild.id}`)
    db.delete(`warnlimitceza_${message.guild.id}`)

  return
}
  
  let embed = new Discord.RichEmbed()   
.setTitle('<a:cekic:644054892670877716> || what is Warn Limit?')
.setDescription('If members reach the number of warnings you specify, then the bot will impose the punishment you choose. Activating this system is recommended; otherwise, no matter how many warnings the members receive, the bot does not impose a penalty.') 
.addBlankField()
.addField('<a:google:635846373052383243> Wait', "We're preparing things for you..") 
.setColor('RED') 
.setFooter('Rem Moderations', client.user.avatarURL)    
message.channel.send(embed).then(s => {
  
 setTimeout(() => {
 
  let embed = new Discord.RichEmbed()   
.setTitle('Warn Limit')
.setDescription('How many warnings do you want to get the user penalty? You must specify a value between `1-20`') 
.setColor('BLUE') 
.setFooter('Rem Moderations', client.user.avatarURL)    
s.edit(embed).then(x => {  
   
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
  if(isNaN(collected.first().content)) return message.reply('You must specify a value between `1-20`').then(s => s.delete(5000))
 if(collected.first().content < 1) return message.reply('The limit you specify must be bigger than `1`').then(s => s.delete(5000))
 if(collected.first().content > 20) return message.reply('The limit you specify must be less than `20`').then(s => s.delete(5000)) 
   
    let limit = collected.first().content
   let embed = new Discord.RichEmbed()   
.setTitle('`Wrn Limit Penalty`')
.setDescription('Kullanıcı aşağıdaki seçeneklere göre '+collected.first().content+' uyarısı sayısına ulaştığında verilecek cezayı seçin.') 
.addBlankField()
.addField(':star: | Cezalar', '**»** ban \n\n **»** kick')
.setColor('BLUE') 
.setFooter('Rem Moderations', client.user.avatarURL)    
x.delete()
   message.channel.send(embed).then(m => {     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
    
  let ceza;
    if(collected.first().content === "ban") ceza = 'ban'
    if(collected.first().content === "kick") ceza = 'kick'
  if(!ceza) return message.channel.send('You spectifed invalid value.')  
  
  m.delete()
 message.channel.send('System actived now! \n\n **Wrn Limit** » `'+limit+'` \n **Warn Limit penalty** » `'+collected.first().content+'`') 

 db.set(`warnlimit_${message.guild.id}`, limit)   
db.set(`warnlimitceza_${message.guild.id}`, collected.first().content)   
  
    
    
  })
  })
  
  })
  })
 
   
   }, 6000) 
  
  
  
  
})
 
 }
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-limit'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-limit',
  description: 'taslak', 
  usage: 'warn-limit'
};
