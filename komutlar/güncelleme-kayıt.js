const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
let güncelleme = await db.fetch(`güncelleme`)  
let süre = await db.fetch(`güncellemesüre`)    
let gyapıcı = await db.fetch(`güncellemeyapımcı`)

let egüncelleme = await db.fetch(`egüncelleme`)  
let esüre = await db.fetch(`egüncellemesüre`)    
let egyapıcı = await db.fetch(`egüncellemeyapımcı`)  
 
let destek = 'https://discord.gg/behdg6R'


if(message.content === "r!güncelleme") {
let güncellemeler = new Discord.RichEmbed()    
.setTitle('<:Update:657876819193626625> Güncellemeler')    
  .setDescription('**Rem Moderations** güncellemele kayıtlarını aşağıdan görebilirsin.Herhangi bir sorun,hata olursa [Destek Sunucumuza]('+destek+') gelip bizimle iletişim kurmayı unutma.')
  .addBlankField()
  .addField('🔔 | Son Güncelleme', güncelleme + '\n\n **Güncelleme Tarihi** » '+süre+'\n\n **Güncelleme Yapımcısı** » <@!'+gyapıcı+'>')
  .addBlankField()
.addField('🔕 | Önceki Güncelleme', egüncelleme + '\n\n **Güncelleme Tarihi** » '+esüre+'\n\n **Güncelleme Yapımcısı** » <@!'+egyapıcı+'>')
.addBlankField()
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
.setFooter('Rem Moderations', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
message.channel.send(güncellemeler)

} else {
  
  let güncellemeler = new Discord.RichEmbed()    
.setTitle('<:Update:657876819193626625> Updates')    
  .setDescription('**Rem Moderations** You can see the update records below.If any problem, error [Support Server]('+destek+') come and do not forget to contact us.')
  .addBlankField()
  .addField('🔔 | Last Update', güncelleme + '\n\n **Update Date** » '+süre+'\n\n **Update Admin** » <@!'+gyapıcı+'>')
  .addBlankField()
  .addField('🔕 | Previous Update', egüncelleme + '\n\n **Update Date** » '+esüre+'\n\n **Update Admin** » <@!'+egyapıcı+'>')  
  .addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setTimestamp()
  .setFooter('Rem Moderations', client.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setColor('RED')
message.channel.send(güncellemeler)
}
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['güncelleme', 'update'], 
  permLevel: 0
};

exports.help = {
  name: 'güncelleme',
  description: 'taslak', 
  usage: 'update'
};
