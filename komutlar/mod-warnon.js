const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
    message.channel.send('**en:** Please system language,installation language. \n **tr:** Aktif edilecek sistem dilini,kurulum dilini seçiniz. \n `tr` **/** `en`').then(m => {
     let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "tr") x = ','
 if(collected.first().content === "en") x = ','  
 if(!x) return message.channel.send('**en:** You have entered an invalid language. \n **tr:** Geçersiz bir dil girdiniz.')   
    
    
  if(collected.first().content === "tr") {
let veri = db.fetch(`warnsistem_${message.guild.id}`)

if(!veri) {  
m.delete()
collected.first().delete()  
  let oky = new Discord.RichEmbed()  
.setTitle('<a:verifed:633993795066658832> Sistem aktif edildi.!')  
.setDescription('Sistem başarıyla aktif hale getirildi.Diğer ayarları da yapmanızı tavsiye ediyoruz.')  
.setColor('BLUE')
.setFooter('Jendisa ', client.user.avatarURL)
message.channel.send(oky).then(f => f.delete(10000))

db.set(`warnsistem_${message.guild.id}`, 'aktif')
db.set(`warndil_${message.guild.id}`, 'tr')
}
if(veri) {
 m.delete()
collected.first().delete()  
  let oky = new Discord.RichEmbed()  
.setTitle('<a:verifed:633993795066658832> Sistem devre dışı.!')  
.setDescription('Sistem devre dışı bırakıldı.Sistemi tekrar aktif ettiğinizde bir önceki ayarlardan çalışmaya devam edecek.')  
.setColor('RED')
.setFooter('Jendisa ', client.user.avatarURL)
message.channel.send(oky).then(f => f.delete(10000)) 
  
 db.delete(`warnsistem_${message.guild.id}`) 

}

if(collected.first().content === "en") {
   let veri = db.fetch(`warnsistem_${message.guild.id}`) 
  if(!veri) {  
m.delete()
collected.first().delete()  
  let oky = new Discord.RichEmbed()  
.setTitle('<a:verifed:633993795066658832> System activated.!')  
.setDescription('The system has been activated successfully.We recommend that you make other settings.')  
.setColor('BLUE')
.setFooter('Jendisa ', client.user.avatarURL)
message.channel.send(oky).then(f => f.delete(10000))

db.set(`warnsistem_${message.guild.id}`, 'aktif')

}
if(veri) {
 m.delete()
collected.first().delete()  
  let oky = new Discord.RichEmbed()  
.setTitle('<a:verifed:633993795066658832> System Disabled.!')  
.setDescription('The system is disabled. When you reactivate the system, it will continue to work from the previous settings.')  
.setColor('RED')
.setFooter('Jendisa ', client.user.avatarURL)
message.channel.send(oky).then(f => f.delete(10000)) 
  
 db.delete(`warnsistem_${message.guild.id}`) 
  db.delete(`warndil_${message.guild.id}`)
}
  
    
  }

  }
  
  })
    })
    
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['uyarı-aç'], 
  permLevel: 0
};

exports.help = {
  name: 'warn-on',
  description: 'taslak', 
  usage: 'warn-on'
};
