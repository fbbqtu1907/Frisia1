const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
exports.run = async(client, message, args) => { 
  
   if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Uyarma işlemi gerçekleştirmek için yeterkli yetkiye sahip değilsin.");  
  
  
  let veri = await db.fetch(`warnsistem_${message.guild.id}`)  
let uyarıneden = await db.fetch(`warnneden_${message.guild.id}`)
let uyarıdm = await db.fetch(`warndm_${message.guild.id}`)
let uyarılogs = await db.fetch(`warnlog_${message.guild.id}`)
let limit = await db.fetch(`warnlimit_${message.guild.id}`)   
let limitceza = await db.fetch(`warnlimitceza_${message.guild.id}`)  
  
// if(!veri) return message.channel.send('Uyarı sistemi aktif halde değil. **=>** `r!uyarı-aç`') 
  
 
  
  let user = message.mentions.users.first() || message.guild.members.get(args[0])
  let neden = args.slice(1).join(' ');
  
  if(uyarıneden) {
  
  //  if(!neden) {
      
 let olamaz = new Discord.RichEmbed()
 .setTitle('<a:iptal:626445972620443648> | İşlem İptali')
 .setDescription('Uyarma işlemine devam etmek için bir neden belirtmen zorunlu hale getirişmiş. \n\n **»** r!uyar <kullanıcı> <neden>')     
 .setColor('RED')     
 .setFooter(client.user.username, client.user.avatarURL)  
 message.channel.send(olamaz).then(x => x.delete(10000))
      
 message.delete()     
      
  return    
// } 
  }
  if(!user) {
      
 let olamaz = new Discord.RichEmbed()
 .setTitle('<a:iptal:626445972620443648> | İşlem İptali')
 .setDescription('Uyarma işlemine devam etmek için bir kullanıcı belirtmen gerekiyor. \n\n **»** r!uyar <kullanıcı> <neden>')   
 .setColor('RED')     
 .setFooter(client.user.username, client.user.avatarURL)  
 message.channel.send(olamaz).then(x => x.delete(10000))
      
 message.delete()     
      
  return    
 } 
  
  
   if(user.id === message.author.id) return message.channel.send('Kendinizi uyaramazsınız.').then(t => t.delete(10000))

  if(user.id === client.user.id) return message.channel.send('Beni neden uyarmaya çalışıyorsun ki?').then(t => t.delete(10000))
  
  if(user.bot) return message.channel.send('Uyarmaya çalıştığınız <@!'+user.id+'> Bir bota benziyor.').then(t => t.delete(10000))  

   if(message.guild.members.get(message.author.id).highestRole.position < message.guild.members.get(user.id).highestRole.position) return message.channel.send("uyarmaya çalıştığınız kişi yetki olarak sizden yukarda.")
   
  
 let nedensorgu;
 if(!neden) nedensorgu = "herhangi bir neden belirtilmedi." 
 else nedensorgu = neden 
  
 let uyarı = await db.fetch(`warnsayı_${user.id}_${message.guild.id}`)
let x = uyarı + 1
 

let toplam;
 if(!uyarı) toplam = 1
 else toplam = x
 
  
 let s = limit - toplam 
  
 let embed = new Discord.RichEmbed() 
 .setTitle('<a:basarl:626445944258560012> Kullanıcı Uyarıldı!') 
 .setDescription(`<@!${user.id}> Adlı kullanıcı,<@!${message.author.id}> Tarafından; **${nedensorgu}** nedeniyle uyarıldı!`) 
 .addBlankField() 
 .addField('<a:hyper:632905422407335948> | Uyarı Bilgisi', 'Kullanıcının toplam **"'+toplam+'"** uyarısı bulunuyor.') 
 .setColor('BLUE') 
 .setFooter(client.user.username, client.user.avatarURL) 
  
 let embed3 = new Discord.RichEmbed() 
 .setTitle('<a:basarl:626445944258560012> Kullanıcı Uyarıldı!') 
 .setDescription(`<@!${user.id}> Adlı kullanıcı,<@!${message.author.id}> Tarafından; **${nedensorgu}** nedeniyle uyarıldı!`) 
 .addBlankField() 
 .addField('<a:hyper:632905422407335948> | Uyarı Bilgisi', 'Kullanıcının toplam **"'+toplam+'"** uyarısı bulunuyor. \n\n :warning: | Kullanıcı,`'+s+'` uyarı sonra; `'+limit+'` Limitine ulaşacak ve **'+limitceza+'** cezası uygulanacak.') 
 .setColor('BLUE') 
 .setFooter(client.user.username, client.user.avatarURL) 
  
 if(uyarıdm) {
let embed = new Discord.RichEmbed()
.setTitle(':x: Uyarıldınız!')
.setDescription('Aşağıda belirtilen sunucudan bir uyarı aldınız devamı ceza işlemi almanızı sağlayabilir.')
.addBlankField()
.addField('Sunucu İsmi', '» **'+message.guild.name+'**')
.addField('Sunucu Sahibi:', '» **'+message.guild.owner+'**')
.addBlankField()
.addField('Moderator:', '» **'+message.member.user.username+'**')
.addField('Uyarı Nedeni:', '» **'+nedensorgu+'**')
.addField(':warning: Toplam Uyarı', toplam)
.addBlankField()
.setColor('BLUE')  
.setThumbnail(client.users.get(user.id).avatarURL)
.setFooter('Jendisa', client.user.avatarURL)
client.users.get(user.id).send(embed) 
 }
 
//if(limit) {
  message.channel.send(embed3)
  message.delete()
  db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.neden`, nedensorgu)
  db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.yetkili`, message.author.id)
  db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.tarih`, moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss'))

  
  if(x >= limit) {
    
  let embed2 = new Discord.RichEmbed() 
 .setTitle('<a:basarl:626445944258560012> Kullanıcı Uyarıldı!') 
 .setDescription(`<@!${user.id}> Adlı kullanıcı,<@!${message.author.id}> Tarafından; **${nedensorgu}** nedeniyle uyarıldı!`) 
 .addBlankField() 
 .addField('<a:hyper:632905422407335948> | Uyarı Bilgisi', 'Kullanıcının toplam **"'+toplam+'"** uyarısı bulunuyor. \n\n :warning: | Kullanıcı `"'+limit+'"` limitine ulaştığı için sunucudan **'+limitceza+'** cezası uygulandı.') 
 .setColor('RED') 
 .setFooter(client.user.username, client.user.avatarURL)    
 message.delete()   
  message.channel.send(embed2)  
 
   
if(limitceza === "kick") message.guild.member(user).kick(nedensorgu)  
if(limitceza === "ban") message.guild.ban(user, {reason: nedensorgu})        
    
    
    db.delete(`warnsayı_${user.id}_${message.guild.id}`) 
  db.delete(data => data.ID.startsWith(`uyarı-bilgi_${message.guild.id}_${user.id}`)) 
  
  //}
}

  
  
  if(!limit) message.channel.send(embed)
  message.delete()
    db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.neden`, nedensorgu)
  db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.yetkili`, message.author.id)
  db.set(`uyarı-bilgi_${message.guild.id}_${user.id}_${toplam}.tarih`, moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss'))
  
   if(uyarılogs) {
 let banned = new Discord.RichEmbed()
.setTitle(':warning: Kullanıcı Uyarıldı!')
.addBlankField()
.addField('<a:cekic:644054892670877716> | Moderator', 'Moderator » '+message.member.user.username+'\n\nİD » **'+message.author.id+'** \n\n Yetki Rolü » **'+message.member.highestRole.name+'** \n\n ')
.addBlankField()
.addField('<a:google:635846373052383243> | Kullanıcı', 'Kullanıcı » '+user.username+'\n\n İD » **'+user.id+'** \n\n Toplam Uyarı » `'+s+'`')
 .addBlankField()
.addField(":warning: Uyarı", 'Uyarı Nedeni » **'+nedensorgu+'** \n\n Uyarı Tarihi » **'+moment(Date.now()).format('DD/MM/YYYY | HH:mm:ss')+'** \n\n Uyarı Kanalı » <#'+message.channel.id+'>') 
.setColor('BLUE')  
.setThumbnail(client.users.get(user.id).avatarURL)
.setFooter('Jendisa', client.user.avatarURL)   
client.channels.get(uyarılogs).send(banned) 
 }
  
  
 
 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'taslak', 
  usage: 'warn'
};
