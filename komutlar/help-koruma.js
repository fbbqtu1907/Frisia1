const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!koruma') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Koruma Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!server-protection** \n Sunucuda admin yetkisine sahip olmayan birinin sunucunun resmini,bölgesini,ismini değiştirmesini engeller.\n\n **› r!role-protection** \n Admin yetkisine sahip olmayan bir üyenin rol silmesini engeller silinen rol tekrar açılır.\n\n **› r!channel-protection** \n Admin yetkisine sahip olmayan bir üyenin kanal silmesini,açmasını engeller silinen kanal tekrar açılır.")
 
     .addField('.', "**› r!security** \n Sunucuya gelen üyeleri belirtilen kanalda tarar eğer kullanıcının kuruluş tarihi belirlenen zamandan azsa seçtiğiniz cezayı uygular.Sunucuya self-bot sokulursa ekleyen kişiyi  bildirir. \n\n **› r!ban-block** \n Bu sistemi aktif hale getirdiğinizde, 'ADMINISTRATOR' yetkisine sahip olmayan ama ban yetkisine sahip üyeler sadece botları kullanayarak kullanıcıları yasaklayabilir.Eğer sağtık kullanılarak birini yasaklarlarsa yasaklanan kullanıcının yasağı kaldırılır..\n\n **› r!caps-block** \n Bu sistemi aktif hale getirirseniz 'MESAJLARI YÖNET' yetkisine sahip olmayan üyeler mesajlarında çok fazla büyük harf kullanamaz.\n\n **› r!ad-p** \n Sunucunuzda link kullanılmasını engeller verilecek ceza ayarlanabilir.'MESAJLARI YÖNET' yetkisine sahip üyelerin link göndermelerini engellemeyecektir. ")   
.addBlankField()
  .addField(':star: | Linkler', '[Beni Ekle!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Destek Sunucusu]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')     
message.channel.send(help)
  } else {
    
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Protection Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**› r!server-protection** \n If someone does not have Admin permission, it prevents the server icon from changing its name,zone.\n\n **› r!role-protection** \n Prevents a person who does not have the x privilege to delete a role, reopens the deleted role. \n\n **› r!channel-protection** \n if someone who does not have Admin authorization attempts to delete the channel, the bot will prevent it and re-open the deleted channel \n\n **› r!security** \n Scans users coming to the server on the specified channel if the user's installation date is less than the specified time and imposes the penalty.")
  .addField('.',"**› r!ban-block** \n When this system is activated, members who do not have the 'ADMINISTRATOR' permissions can only ban using bots. if not use bots,ban is removed.\n\n **› r!caps-block** \n When this system is activated, members who do not have the 'MANAGE MESSAGES' permissions not use caps lock\n\n **› r!ad-p** \nPrevents sharing of connections on your server.Penalty can be adjusted.")   
.addBlankField()
  .addField(':star: | Links', '[Add Me!](https://discordapp.com/oauth2/authorize?client_id=646341241268600836&scope=bot&permissions=8) \n [Support Server]('+destek+')')
  .setFooter('Version: v0.0.1')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setURL(destek)
  .setColor('RANDOM')   
  message.channel.send(help)   
  }
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['protection','koruma'], 
  permLevel: 0
};

exports.help = {
  name: 'help-koruma',
  description: 'taslak', 
  usage: 'koruma'
};

