const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
 if(message.author.id !== "419214688061227009")
if(message.author.id !== "655420859204501523")  return message.channel.send("You don't have the strength to do it, warrior!")
  
  let x = client.ping + 20
  
let embed = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> ⩥ Reboot')
  .setDescription("Şu an **Rem Moderations** bot'u yeniden başlatmak üzeresin.")
  .addBlankField()
  .addField('<a:google:635846373052383243> | Şu anki Ping Değeri:', '**'+client.ping+'** ms!')
  .addField('<a:copluk:650627079989231646> | Reboot Sonrası Ping Değeri:', '**'+x+'** ms!')
  .addBlankField()
  .addField('__SEÇENEKLER__', '**iptal** `/` **devam**')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('RED')
message.channel.send(embed).then(m => {
  
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
 collected.first().delete()
 m.delete()
 message.reply('İşlemi iptal ettim aşkım <a:hh:639135059051413524>')    
     
   }
   if(collected.first().content === "devam") {
 collected.first().delete()
let embed = new Discord.RichEmbed()
  .setTitle('<a:settings:647745776252092416> ⩥ Reboot')
  .setDescription("Reboot işlemi başarılı.")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setURL('https://www.google.com')
  .setColor('GREEN')
 m.edit(embed)
m.react('633993795066658832')   
 
  setTimeout(() => {
   
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
 }, 2000)      
     
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
  name: 'refresh',
  description: 'taslak', 
  usage: 'refresh'
};

