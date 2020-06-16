const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
 let every = message.guild.roles.find(r => r.name === '@everyone') 
  message.channel.send('**en:** Please select panel language,installation language. \n **tr:** Lütfen kurulacak panel dilini,kurulum dilini seçiniz. \n `tr` **/** `en`')
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

let seviyor = new Discord.RichEmbed()
  .setTitle("Kurulum")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Panel aşağıdaki gibi gözükecek.Onaylıyor musunuz? \n\n `evet` **/** `iptal`")
  .setFooter('Jendisa',message.author.avatarURL)
  .setImage('https://i.imgyukle.com/2019/12/07/RGboqj.jpg')
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('BLUE')    
  message.channel.send(seviyor)

   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 40000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "evet") x = ','
 if(collected.first().content === "iptal") x = ','  
 if(!x) return message.channel.send('Doğru bir seçenek girmediniz.')   
    
    
   if(collected.first().content === "iptal") return message.channel.send('İptal Edildi :x:')  

   message.guild.createChannel('PANEL', 'category').then(bilgi => {
    	
     message.guild.createChannel('Toplam Üye ▪ '+message.guild.memberCount, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
  }) 
  db.set(`toplamuye_${message.guild.id}`, shbt.id)   
     }) 
          message.guild.createChannel('Rekor Aktif ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`rekoraktif_${message.guild.id}`, shbt.id)  
     db.set(`rekoraktifs_${message.guild.id}`, message.guild.members.filter(m => m.presence.status !== "offline").size) 
          })   
   
      message.guild.createChannel('Aktif ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`aktif_${message.guild.id}`, shbt.id)  
     })   
        message.guild.createChannel('Bot ▪ '+message.guild.members.filter(m => m.user.bot).size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`bot_${message.guild.id}`, shbt.id)  
     }) 
   message.channel.send('Panel başarıyla kuruldu!').then(m => m.delete(10000))
   })
    
     
   })
             
 db.set(`paneldil_${message.guild.id}`, 'tr') 
  
  }
    
    if(collected.first().content === "en") {

let seviyor = new Discord.RichEmbed()
  .setTitle("Kurulum")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("The panel will look like below. Do you confirm? \n\n `yes` **/** `cancel`")
  .setFooter('Jendisa',message.author.avatarURL)
  .setImage('https://i.imgyukle.com/2019/12/07/RGfXSv.jpg')
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('BLUE')    
  message.channel.send(seviyor)

   message.channel.awaitMessages(filtre, {
          max: 1,
          time: 40000,
          errors: ["time"]
        })
        .then(collected => {
 let x;
 if(collected.first().content === "yes") x = ','
 if(collected.first().content === "cacel") x = ','  
 if(!x) return message.channel.send('You have not entered a correct option.')   
    
    
   if(collected.first().content === "iptal") return message.channel.send('its Canceled :x:')  

   message.guild.createChannel('PANEL', 'category').then(bilgi => {
    	
     message.guild.createChannel('Total Members ▪ '+message.guild.memberCount, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
  }) 
  db.set(`toplamuye_${message.guild.id}`, shbt.id)   
     }) 
          message.guild.createChannel('Record Online ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`rekoraktif_${message.guild.id}`, shbt.id)  
     })   
   
      message.guild.createChannel('Online ▪ '+message.guild.members.filter(m => m.presence.status !== "offline").size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`aktif_${message.guild.id}`, shbt.id)  
     })   
        message.guild.createChannel('Bot ▪ '+message.guild.members.filter(m => m.user.bot).size, 'voice').then(shbt => {
    	shbt.setParent(bilgi.id)
   shbt.overwritePermissions(every, {
    		CONNECT : false,
    }) 
     db.set(`bot_${message.guild.id}`, shbt.id)  
     }) 
   message.channel.send('Panel successfully installed!').then(m => m.delete(10000))
   })
    
     
   })
             
  db.set(`paneldil_${message.guild.id}`, 'en')  
  
  }
     
  })
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['panel-create'], 
  permLevel: 0
};

exports.help = {
  name: 'panel-s',
  description: 'taslak', 
  usage: 'panel-s'
};

