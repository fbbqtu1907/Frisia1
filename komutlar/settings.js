const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have sufficient permissions to view server settings.");
let a = await db.fetch(`mesajlogları_${message.guild.id}`)
let b = await db.fetch(`spamlogları_${message.guild.id}`)  
let c = await db.fetch(`reklamlogları_${message.guild.id}`)   
let d = await db.fetch(`korumalogları_${message.guild.id}`)
let h = await db.fetch(`moderasyonlogları_${message.guild.id}`)
let k = await db.fetch(`mesajlogları_${message.guild.id}`)  
let mlog = await db.fetch(`modlog_${message.guild.id}`)  


let kanal = await db.fetch(`gkanal_${message.guild.id}`)
let süre = await db.fetch(`gsüre_${message.guild.id}`)
let ceza = await db.fetch(`gceza_${message.guild.id}`)

let caps = await db.fetch(`capsblock_${message.guild.id}`) 
let sunucu = await db.fetch(`sunucukoruma_${message.guild.id}`) 
let rol = await db.fetch(`rolkoruma_${message.guild.id}`) 
let kanalkoruma = await db.fetch(`kanalkoruma_${message.guild.id}`) 
let spam = await db.fetch(`spam_${message.guild.id}`)  
let küfür = await db.fetch(`küfür_${message.guild.id}`)  
let veri = await db.fetch(`reklam_${message.guild.id}`) 

let aq;
if(!mlog) aq = 'OFF'
else aq = 'ON'  

let aw;
if(!a) aw = ':x:'
else aw = ':heavy_check_mark:'  

let ae;
if(!b) ae = ':x:'
else ae = ':heavy_check_mark:' 

let ar;
if(!c) ar = ':x:'
else ar = ':heavy_check_mark:'   
  
let at;
if(!d) at = ':x:'
else at = ':heavy_check_mark:'   
  
let ay;
if(!h) ay = ':x:'
else ay = ':heavy_check_mark:'   
  
let au;
if(!k) au = ':x:'
else au = ':heavy_check_mark:'   
  
/////////////////////////////////
  
let aı;  
if(!kanal) aı = 'OFF'  
else aı = 'ON'  

let ao;  
if(!süre) ao = ':x:'  
else ao = süre    
  
let ap;  
if(!ceza) ap = ':x:'  
else ap = ceza   
  
let ağ;  
if(!kanal) ağ = 'OFF'  
else ağ = message.guild.channels.get(kanal.id).name   
  
let ss;
if(!mlog) ss = 'OFF'
else ss = message.guild.channels.get(mlog).name
  
/////////////////////////////////  
  
let sunucukk;
if(!sunucu) sunucukk = ':x:'
else sunucukk = ':heavy_check_mark:'
 
let rolkk;
if(!rol) rolkk = ':x:'
else rolkk = ':heavy_check_mark:' 
  
 let kk;
if(!kanalkoruma) kk = ':x:'
else kk = ':heavy_check_mark:' 
  
 let spamk;
if(!veri) spamk = ':x:'
else spamk = ':heavy_check_mark:'   
  
 let küfürk;
if(!küfür) küfürk = ':x:'
else küfürk = ':heavy_check_mark:' 
  
let capsk;
if(!caps) capsk = ':x:'
else capsk = ':heavy_check_mark:' 
  
let embed = new Discord.RichEmbed()
.setTitle('<a:settings:647745776252092416> | Jendisa Server Settings')
.setDescription('Welcome to the x server settings menu, you can go to any of the menus given below.')
.addBlankField()
.addField(':closed_book: » Menus', '› **mod-log** \n\n › **security** \n\n › **protection**')
.setTimestamp()
.setThumbnail(message.guild.iconURL)
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')
message.channel.send(embed).then(s => {
  
   let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
    
    if(collected.first().content === "mod-log") { 

      
let embed = new Discord.RichEmbed()
.setTitle('<a:settings:647745776252092416> | Jendisa Server Settings')
.setDescription('Server **mod-log** Settings \n `menu/mod-log`')
.addBlankField()
.addField(':mag_right: | System: **'+aq+'**', '**›** Message Logs: '+au+' \n\n **›** Spam Logs: '+aw+'\n\n **›** Ad Logs: '+ar+'\n\n **›** Protection Logs: '+at+'\n\n **›** Moderation Logs: '+ay+'')
.addBlankField()
.addField(':closed_book: » Logs Channel:', ss)
.setTimestamp()
.setThumbnail(message.guild.iconURL)
.setURL('https://discord.gg/behdg6R')
.setColor('RED')
s.edit(embed)     
          
collected.first().delete()      
  return    
    }
if(collected.first().content === "security") { 
collected.first().delete()        
let embed = new Discord.RichEmbed()
.setTitle('<a:settings:647745776252092416> | Jendisa Server Settings')
.setDescription('Server **security** Settings \n `menu/security`')
.addBlankField()
.addField(':no_entry_sign: | System: '+aı+'', '**›** Time required: '+ao+'\n\n **›** Penalty: '+ap)
.addBlankField()
.addField(':closed_book: » Security Channel:', ağ)
.setTimestamp()
.setThumbnail(message.guild.iconURL)
.setURL('https://discord.gg/behdg6R')
.setColor('RED')
s.edit(embed)    
return
}
if(collected.first().content === "protection") { 
collected.first().delete()        

let toplam = 0
 if(sunucu) toplam + 20
 if(rol) toplam + 20
 if(kanalkoruma) toplam + 20
 if(spam) toplam + 20
 if(küfür) toplam + 20 
 
let embed = new Discord.RichEmbed()
.setTitle('<a:settings:647745776252092416> | Jendisa Protection Settings')
.setDescription('Server **Protection** Settings \n `menu/protection`')
.addBlankField()
.addField(':no_entry_sign: | Systems:', '**›** Server Protection: '+sunucukk+'\n\n **›** Role Protection: '+rolkk+'\n\n **›** Channel Protection:'+kk+'\n\n **›** Link Protection: '+spamk+'\n\n **›** Bad Words Protection: '+küfürk+'\n\n **›** Caps Block: '+capsk)
.addBlankField()
.addField(':closed_book: » Security Level:', '`%'+toplam+'`')
.setTimestamp()
.setThumbnail(message.guild.iconURL)
.setURL('https://discord.gg/behdg6R')
.setColor('RED')
s.edit(embed)     
return
}
  })
  message.channel.send('you must enter a correct menu.')
  
})
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'settings',
  description: 'taslak', 
  usage: 'settings'
};
