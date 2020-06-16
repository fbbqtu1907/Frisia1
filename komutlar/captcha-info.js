const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let destek = 'https://discord.gg/behdg6R'
  
  if(message.content === 'r!bilgi-captcha') {
let bilgilendirme = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || Sistem Bilgilendirmesi')
  .setDescription('**Captcha Nedir?** \n\n Captcha, botlara karşı önlem olarak etkili bir çözümdür. Bu test bilgisayarların çözemeyeceği ama insanların çözebileceği şeklinde testlerden oluşan testlerdir. Kısaca belirtmek gerekirse testte yer alan resmi bir insan inceleyip yorumlarken bir bilgisayar bunu yorumlayıp doğru kararı veremez. Captca kelime anlamı olarak sözlük anlamı yoktur. Kısaltma olan bu isim Completely Automated Public Turing test to tell Computers and Humans Apart ifadesinin kısaltmasıdır')
  .addBlankField()
  .addField('Ne işe yarar?', 'Sunucunuza biri geldiğinde **Rem Moderations** bot onlara bir DM mesajı gönderir.Bu mesajda bulunan resimdeki karakterleri 3 kere yanlış girerlerse bot belirtilen rolü vermeyecektir.Eğer karakterler doğru girilirse bot rolü verir.')
  .addBlankField()
  .addField('Zorluk Dereceleri', "Birazdan kurulumu tamamlarken,size **Zorluk Derecesi** soracaktır.Bunlar; `kolay,orta,zor` olarak üç'e ayrılır.Zorluk derecesi ne kadar yükselirse bot o kadar zor kodlar gönderir.Tavsiye Ayarımız: **zor** (o kadar zor değil)")
  .setFooter('Rem Moderations', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')
  message.channel.send(bilgilendirme)
  } else {
    
     let help = new Discord.RichEmbed()
let bilgilendirme = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || System İnfo')
  .setDescription('**What İs Captcha?** \n\n CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart. In other words, CAPTCHA determines whether the user is real or a spam robot. CAPTCHAs stretch or manipulate letters and numbers, and rely on human ability to determine which symbols they are.')
  .addBlankField()
  .addField('What does it do?', 'Rem Moderations bot when someone arrives on your server,Sends them a DM message.The characters in the picture in this message.If entered incorrectly 3 times, the bot will not give the specified role')
  .addBlankField()
  .addField('Difficulty Degrees', "As soon as you complete the installation, it will ask you the Degree of Difficulty.These; `easy, medium, hard` is divided into three. The higher the degree of difficulty, the harder the bot sends codes.Advice Setting: **hard** (not so hard)")
  .setFooter('Rem Moderations', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')
  message.channel.send(bilgilendirme)
  }
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['captcha-info','bilgi-captcha'], 
  permLevel: 0
};

exports.help = {
  name: 'info-captcha',
  description: 'taslak', 
  usage: 'captcha-info'
};

