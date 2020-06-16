const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!moderasyon') {
     let help = new Discord.RichEmbed()
  .setTitle('Jendisa Moderasyon Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Eğer herhangi bir hata veya bir sorun olursa aşağıdaki linklerden bize ulaşabilirsin.')
  .addBlankField()
  .addField(':blue_book: | __KOMUTLAR__', "**› r!ban** \n Belirtilen veya İD kimliği verilen kullanıcıyı sunucudan yasaklar,neden yasaklındığını DM yoluyla iletir. \n\n **› r!kick** \n Belirtilen veya İD kimliği verilen kullanıcıyı sunucudan atar neden atıldığını DM yoluyla iletir \n\n **› r!unban** \n Yasaklı bir kullanıcının yasağını kaldırır.\n\n **› r!settings** \n Sunucudaki tüm Jendisa bot ayarlarını gösterir. \n\n **› r!search-self** \n Sunucudaki self botları tarayıp size sayısını bildirir.Self botlar sunucular için çok zararlı,Discorda yasaktır. \n\n **› r!sil** \n Belirttiğiniz sayıda mesajı siler. \n\n**› r!server-icon** \n Sunucu resmini değiştirir. \n\n **› r!server-name** \n Sunucu ismini değiştirir. \n\n **› r!delete-channel** \n Belirttiğiniz kanalı siler. \n\n **› r!beyaz-liste** \n Belirttiğiniz rol botun hiçbir koruma sistemine yakalanmaz. \n\n **› r!kelime-ekle** \n Eklediğiniz kelime veya cümlenin sunucuda kullanmasını engeller. \n\n**› r!kelime-sil** \n Eklediğiniz kelime,cümleyi bu komutla silebilirsiniz. \n\n **› r!kelime-liste** \n Eklediğiniz kelimeler ve cümleleri bu şekilde görebilirsiniz")
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
  .setTitle('Jendisa Moderation Help Menu')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('If you have a problem or error, you can reach us through the links below.')
  .addBlankField()
  .addField(':blue_book: | __COMMANDS__', "**› r!ban** \n bans the specified member from the server. Gives information about why it is banned from the server via DM \n\n **› r!kick** \n kick the specified member from the server. Gives information about why it is kicked from the server via DM \n\n **› r!unban** \n removes the specified member's ban on the server\n\n **› r!settings** \n Displays all Jendisa bot settings on the server. \n\n **› r!search-self** \n It scans the self-bots within the server and gives the number of self-bots. Self-bots are extremely dangerous for your server. \n\n**› r!clear** \n Mass message deletion \n\n**› r!server-icon** \n replaces the server image with the image you specify. \n\n **› r!server-name** \n replaces the server name with the name you specify. \n\n **› r!delete-channel** \n deletes the channel you specify. \n\n **› r!white-list** \nThe role you specify is not caught in any protection system of the bot.\n\n **› r!add-word** \n Add a blacklist word. \n\n**› r!delete-word** \n Delete a blacklist word. \n\n **› r!word-list** \n Blacklist words list")
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
  aliases: ['moderation','moderasyon'], 
  permLevel: 0
};

exports.help = {
  name: 'help-moderasyon',
  description: 'taslak', 
  usage: 'moderasyon'
};

