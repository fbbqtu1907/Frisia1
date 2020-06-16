const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  let channel = message.mentions.channels.first()
  let kanal = await db.fetch(`gkanal_${message.guild.id}`)
  let süre = await db.fetch(`gsüre_${message.guild.id}`)
  let ceza = await db.fetch(`gceza_${message.guild.id}`)
  let filtre = mes => mes.author.id === message.author.id;  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");  

  if(args[0] === "off") {
 
  if(!kanal) return message.channel.send('Apparently the system is already disabled.')  
  
  message.channel.send('Okay! security system is currently disabled')  
  message.guild.owner.send('security system disabled by `'+message.author.username+'`')  
  db.delete(`guvenlikdil_${message.guild.id}`)
  db.delete(`gkanal_${message.guild.id}`)
  db.delete(`gsüre_${message.guild.id}`) 
  return 
  }
if(!channel) return message.channel.send('you must specify a channel to continue processing')
 
  message.channel.send('**en:** Please select installation language. \n **tr:** Lütfen kurulacak kurulum dilini seçiniz. \n `tr` **/** `en`')  

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
 
  let tamamdır = new Discord.RichEmbed()
  .setTitle("Tamam! Hadi,gerekli ayarları yapalım.")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Kişinin sunucuya girebilmesi için gereken minimum süre nedir?")
  .addBlankField()
  .addField(':question: Örnek:', '1 ay')
  .addBlankField()
  .addField('Times', '» 1 yıl \n » 1 ay \n » 1 hafta \n » 1 gün \n » 1 saat')
  .addBlankField()
  .addField('Settings:', 'Sistem: `AKTİF` \n\n Süre: `belirlenmedi.` \n\n Ceza: `belirlenmedi.`')
  .setTimestamp()
  .setColor('RED')
  message.channel.send(tamamdır).then(t => {
    
  
  
     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   message.delete()
    let sa;
    if(collected.first().content === "1 yıl") sa = '1 year' 
    if(collected.first().content === "1 ay") sa = '1 month'
    if(collected.first().content === "1 hafta") sa = '1 week' 
    if(collected.first().content === "1 gün") sa = '1 day' 
    if(collected.first().content === "1 saat") sa = '1 hour' 
    if(!sa) return message.channel.send("Geçerli bir zaman dilimi girmediniz.")
let yrr;
yrr = collected.first().content
       collected.first().delete()
 let tamamdır = new Discord.RichEmbed()
  .setTitle("Tamam! Hadi,gerekli ayarları yapalım.")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("2- Eğer gelen kişi'nin hesabı; `"+sa+'` Süreden azsa ne cezası uygulansın?')
  .addBlankField()
  .addField(':question: Örnek:', 'ban')
  .addBlankField()
  .addField('Times', '» ban \n » kick')
  .addBlankField()
  .addField('Settings:', 'Sistem: `AKTİF` \n\n Süre: `'+collected.first().content+'` \n\n Ceza: `belirtilmedi.`')
  .setTimestamp()
  .setColor('RED')
  t.edit(tamamdır)  
     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
    message.delete()
    let x;
    if(collected.first().content === "ban") x = 'ban' 
    if(collected.first().content === "kick") x = 'kick'
    
    if(!x) return message.channel.send("Geçerli bir ceza belirtmediniz.")
    collected.first().delete()
  let tamamdır = new Discord.RichEmbed()
  .setTitle("Tüm Ayarlar Yapıldı!")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("Artık sistem,aşağıdaki ayarlarda çalışmaya başlayacak. :tada:")
  .addBlankField()
  .addField('Settings:', 'Sistem: `AKTİF` \n\n Süre: `'+yrr+'` \n\n Ceza: `'+x+'` \n\n Sistem Dili: `TR`')
  .setTimestamp()
  .setColor('GREEN')
  t.edit(tamamdır)  
    
  message.guild.owner.send('Güvenlik sistemi`'+message.member.user.username+'` tarafından aktifleştirildi.\n\n **Ayarlar:** \n » Kanal: '+channel+' \n » Sistem: AÇIK \n » Gerekli Süre: '+yrr+' \n » Ceza: '+x+' \n Sistem Dili: TR')  
  db.set(`gkanal_${message.guild.id}`, channel)
  db.set(`gsüre_${message.guild.id}`, sa)
  db.set(`gceza_${message.guild.id}`, x)  
  db.set(`guvenlikdil_${message.guild.id}`, "tr")
  })
  })
  })
   
  return
  }
  
  if(collected.first().content === "en") {

  
  
  let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("What is the minimum time required for entry clearance?")
  .addBlankField()
  .addField(':question: Example:', '1 month')
  .addBlankField()
  .addField('Times', '» 1 year \n » 1 month \n » 1 week \n » 1 day \n » 1 hour')
  .addBlankField()
  .addField('Settings:', 'System: `ON` \n\n Time: `not specified` \n\n Penalty: `not specified`')
  .setTimestamp()
  .setColor('RED')
  message.channel.send(tamamdır).then(t => {
    
  
  
     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   message.delete()
    let sa;
    if(collected.first().content === "1 year") sa = '1 year' 
    if(collected.first().content === "1 month") sa = '1 month'
    if(collected.first().content === "1 week") sa = '1 week' 
    if(collected.first().content === "1 day") sa = '1 day' 
    if(collected.first().content === "1 hour") sa = '1 hour' 
    if(!sa) return message.channel.send("The value you specify must be one of the given options.")
 let asıl = collected.first().content
       collected.first().delete()
 let tamamdır = new Discord.RichEmbed()
  .setTitle("Okay! Let's make the necessary settings")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("2- What should be done that does not meet the requirements")
  .addBlankField()
  .addField(':question: Example:', 'ban')
  .addBlankField()
  .addField('Times', '» ban \n » kick')
  .addBlankField()
  .addField('Settings:', 'System: `ON` \n\n Time: `'+collected.first().content+'` \n\n Penalty: `not specified`')
  .setTimestamp()
  .setColor('RED')
  t.edit(tamamdır)  
     
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
    message.delete()
    let x;
    if(collected.first().content === "ban pls") x = 'ban' 
    if(collected.first().content === "kick pls") x = 'kick'
    if(collected.first().content === "ban") x = 'ban' 
    if(collected.first().content === "kick") x = 'kick'
    
    if(!x) return message.channel.send("The value you specify must be one of the given options.")
    collected.first().delete()
  let tamamdır = new Discord.RichEmbed()
  .setTitle("The necessary settings have been made!")
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription("The bot will now work in the settings you specified.")
  .addBlankField()
  .addField('Settings:', 'System: `ON` \n\n Time: `'+asıl+'` \n\n Penalty: `'+x+'`')
  .setTimestamp()
  .setColor('GREEN')
  t.edit(tamamdır)  
    
  message.guild.owner.send('Security system activated by `'+message.member.user.username+'` \n\n **Settings:** \n » Channel: '+channel+' \n » System: ON \n » Time required: '+asıl+' \n » Penalty: '+x+'')  
  db.set(`gkanal_${message.guild.id}`, channel)
  db.set(`gsüre_${message.guild.id}`, asıl)
  db.set(`gceza_${message.guild.id}`, x)  
  })
  })
  })
 return
  }
  })
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'security',
  description: 'taslak', 
  usage: 'security'
};
