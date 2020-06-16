const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't think you have enough privileges to use this command.");
  
message.channel.send('**en:** Please select installation language. \n **tr:** Lütfen kurulacak kurulum dilini seçiniz. \n `tr` **/** `en`')  
  
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
let bilgilendirme = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || Sistem Bilgilendirmesi')
  .setDescription('**Captcha Nedir?** \n\n Captcha, botlara karşı önlem olarak etkili bir çözümdür. Bu test bilgisayarların çözemeyeceği ama insanların çözebileceği şeklinde testlerden oluşan testlerdir. Kısaca belirtmek gerekirse testte yer alan resmi bir insan inceleyip yorumlarken bir bilgisayar bunu yorumlayıp doğru kararı veremez. Captca kelime anlamı olarak sözlük anlamı yoktur. Kısaltma olan bu isim Completely Automated Public Turing test to tell Computers and Humans Apart ifadesinin kısaltmasıdır')
  .addBlankField()
  .addField('Ne işe yarar?', 'Sunucunuza biri geldiğinde **Jendisa** bot onlara bir DM mesajı gönderir.Bu mesajda bulunan resimdeki karakterleri 3 kere yanlış girerlerse bot belirtilen rolü vermeyecektir.Eğer karakterler doğru girilirse bot rolü verir.')
  .addBlankField()
  .addField('Zorluk Dereceleri', "Birazdan kurulumu tamamlarken,size **Zorluk Derecesi** soracaktır.Bunlar; `kolay,orta,zor` olarak üç'e ayrılır.Zorluk derecesi ne kadar yükselirse bot o kadar zor kodlar gönderir.Tavsiye Ayarımız: **zor** (o kadar zor değil)")
  .addBlankField()
  .addField('Devam!', '**:warning: Okuduğunuza emin olmak için bot sizen cevabı bu mesajdan 20 saniye sonra isteyecektir. :warning:**')
  .setFooter('Jendisa', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')
  message.channel.send(bilgilendirme).then(m => {
     setTimeout(() => {

       let s = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || Sistem Bilgilendirmesi')
  .setDescription('**Captcha Nedir?** \n\n Captcha, botlara karşı önlem olarak etkili bir çözümdür. Bu test bilgisayarların çözemeyeceği ama insanların çözebileceği şeklinde testlerden oluşan testlerdir. Kısaca belirtmek gerekirse testte yer alan resmi bir insan inceleyip yorumlarken bir bilgisayar bunu yorumlayıp doğru kararı veremez. Captca kelime anlamı olarak sözlük anlamı yoktur. Kısaltma olan bu isim Completely Automated Public Turing test to tell Computers and Humans Apart ifadesinin kısaltmasıdır')
  .addBlankField()
  .addField('Ne işe yarar?', 'Sunucunuza biri geldiğinde **Jendisa** bot onlara bir DM mesajı gönderir.Bu mesajda bulunan resimdeki karakterleri 3 kere yanlış girerlerse bot belirtilen rolü vermeyecektir.Eğer karakterler doğru girilirse bot rolü verir.')
  .addBlankField()
  .addField('Zorluk Dereceleri', "Birazdan kurulumu tamamlarken,size **Zorluk Derecesi** soracaktır.Bunlar; `kolay,orta,zor` olarak üç'e ayrılır.Zorluk derecesi ne kadar yükselirse bot o kadar zor kodlar gönderir.Tavsiye Ayarımız: **zor** (o kadar zor değil)")
  .addBlankField()
  .addField('Devam!', 'devam etmek için bulunduğunuz kanala **okudum** yazın.')
  .setFooter('Jendisa', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')       
   m.edit(s)    
    message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
    let x;
    if(collected.first().content === "okudum") x = ','  
    if(!x)  {
m.delete()      
message.channel.send(':x: Anlaşılan yeterince okumamışsınız.')  
return
}
//<a:yildiz:633977788981968896>
m.delete()  
let adım1 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Adım 1')
.setDescription('İlk önce eğer kullanıcılar kodu doğru bir şekilde bilirse verilecek rolü belirleyelim.')
.addBlankField()
.addField(':question: Örnek:', '**@member** `/` **653278579127353354 (role İD)**')
.addBlankField()
.addField('Devam!', 'devam etmek için bulunduğunuz kanala yukardaki örnek gibi bir rol belirtin.')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')      
message.channel.send(adım1).then(l => {
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
let rol = collected.first().mentions.roles.first() || message.guild.roles.get(collected.first().content)
if(!rol) {
  
l.delete()
collected.first().react('❌')  
message.channel.send('Belirttiğiniz rolü sunucuda bulamadım.').then(t => t.delete(10000))
return
}
  l.delete()  
 let adım2 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Adım 2')
.setDescription('Rolü belirledik.Şimdi zorluk seviyesini seçelim daha önce de belirttiğimiz gibi,**zor** seviyesini seçmenizi tavsiye ediyoruz. \n (kolay seviyesini sadece **Gold Üyeler** seçebilir.)')
.addBlankField()
.addField(':question: Zorluk Seviyeleri:', '**[:star:]** » kolay \n » orta \n » zor')
.addBlankField()
.addField('Devam!', 'devam etmek için bulunduğunuz kanala yukardaki zorluklardan bir tanesini belirtin.')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')      
message.channel.send(adım2).then(ü => {  

  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
  let zorluk;
    if(collected.first().content === "kolay") zorluk = 'kolay'
    if(collected.first().content === "orta") zorluk = 'orta'
    if(collected.first().content === "zor") zorluk = 'zor'
if(!zorluk) {
 ü.delete
  message.reply('Geçerli bir kolaylık seviyesi girmediniz.')
return
}
if(collected.first().content === "kolay") {
 let gold = db.fetch(`gold_${message.author.id}`)
if(!gold) {
ü.delete()
message.channel.send('`kolay` derecesini seçmek için,**Gold Üye** olmanız gerekiyor.')  
return  
}
}
ü.delete()  
  
 let adım3 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Sistem Aktifleştirildi!')
.setDescription('Şu andan itibaren sistem aktif edildi.! **Rem Bot <3**')
.addBlankField()
.addField('Sistem', 'Verilecek Rol **»** <@&'+rol.id+'> \n\n Zorluk Derecesi **»** `'+zorluk+'` \n\n Sistem Dili **»** `TR`')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
message.channel.send(adım3)
  
db.set(`captchazorluk_${message.guild.id}`, zorluk) 
db.set(`captcharol_${message.guild.id}`, rol.id)
db.set(`captchadil_${message.guild.id}`, "tr")    

  })
})
  })
})
      
    })
       
     
     
     }, 20000)
   
   
    
  })
  }

/////////////////////////////////////////    
    
    
    
    
    
    if(collected.first().content === "en") {
let bilgilendirme = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || System İnfo')
  .setDescription('**What İs Captcha?** \n\n CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart. In other words, CAPTCHA determines whether the user is real or a spam robot. CAPTCHAs stretch or manipulate letters and numbers, and rely on human ability to determine which symbols they are.')
  .addBlankField()
  .addField('What does it do?', 'Jendisa bot when someone arrives on your server,Sends them a DM message.The characters in the picture in this message.If entered incorrectly 3 times, the bot will not give the specified role')
  .addBlankField()
  .addField('Difficulty Degrees', "As soon as you complete the installation, it will ask you the Degree of Difficulty.These; `easy, medium, hard` is divided into three. The higher the degree of difficulty, the harder the bot sends codes.Advice Setting: **hard** (not so hard)")
  .addBlankField()
  .addField('Continue!', '**:warning: the bot will ask you 20 seconds after this message to make sure you have read it. :warning:**')
  .setFooter('Jendisa', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')
  message.channel.send(bilgilendirme).then(m => {
     setTimeout(() => {

       let s = new Discord.RichEmbed()
  .setTitle('<a:cekic:644054892670877716> || System İnfo')
  .setDescription('**What İs Captcha?** \n\n CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart. In other words, CAPTCHA determines whether the user is real or a spam robot. CAPTCHAs stretch or manipulate letters and numbers, and rely on human ability to determine which symbols they are.')
  .addBlankField()
  .addField('What does it do?', 'Jendisa bot when someone arrives on your server,Sends them a DM message.The characters in the picture in this message.If entered incorrectly 3 times, the bot will not give the specified role')
  .addBlankField()
  .addField('Difficulty Degrees', "As soon as you complete the installation, it will ask you the Degree of Difficulty.These; `easy, medium, hard` is divided into three. The higher the degree of difficulty, the harder the bot sends codes.Advice Setting: **hard** (not so hard)")
  .addBlankField()
  .addField('Continue!', 'type "continue" on your current channel to continue.')
  .setFooter('Jendisa', client.user.avatarURL)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')     
   m.edit(s)    
    message.channel.awaitMessages(filtre, {
          max: 1,
          time: 35000,
          errors: ["time"]
        })
        .then(collected => {
    let x;
    if(collected.first().content === "continue") x = ','  
    if(!x)  {
m.delete()      
message.channel.send(":x: apparently you haven't read enough.")  
return
}
//<a:yildiz:633977788981968896>
m.delete()  
let adım1 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Step 1')
.setDescription("First, if users know the code correctly, let's determine the give role.")
.addBlankField()
.addField(':question: Example:', '**@member** `/` **653278579127353354 (role İD)**')
.addBlankField()
.addField('Continue!', 'To continue, specify a role such as the example above.')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')      
message.channel.send(adım1).then(l => {
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
let rol = collected.first().mentions.roles.first() || message.guild.roles.get(collected.first().content)
if(!rol) {
  
l.delete()
collected.first().react('❌')  
message.channel.send('The role you specified was not found on the server.').then(t => t.delete(10000))
return
}
  l.delete()  
 let adım2 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || Step 2')
.setDescription("Let's select the level of difficulty. \ n (only **Gold Members** can select the easy level.)")
.addBlankField()
.addField(':question: Difficulty Levels:', '**[:star:]** » easy \n » medium \n » hard')
.addBlankField()
.addField('Continue!', 'Please indicate one of the above difficulties to your channel to continue.')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('RED')      
message.channel.send(adım2).then(ü => {  

  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 50000,
          errors: ["time"]
        })
        .then(collected => {
  let zorluk;
    if(collected.first().content === "easy") zorluk = 'kolay'
    if(collected.first().content === "medium") zorluk = 'orta'
    if(collected.first().content === "hard") zorluk = 'zor'

 let ingzorluk;   
      if(collected.first().content === "easy") ingzorluk = 'easy'
    if(collected.first().content === "medium") ingzorluk = 'medium'
    if(collected.first().content === "hard") ingzorluk = 'hard'  
    
    
    if(!zorluk) {
 ü.delete
  message.reply('You have not entered a valid convenience level.')
return
}
if(collected.first().content === "kolay") {
 let gold = db.fetch(`gold_${message.author.id}`)
if(!gold) {
ü.delete()
message.channel.send('`kolay` derecesini seçmek için,**Gold Üye** olmanız gerekiyor.')  
return  
}
}
ü.delete()  
  
 let adım3 = new Discord.RichEmbed()
.setTitle('<a:yildiz:633977788981968896> || System Activated!')
.setDescription('The system has been activated from now on! **Rem Bot <3**')
.addBlankField()
.addField('System', 'Add Role **»** <@&'+rol.id+'> \n\n Difficulty Lvel **»** `'+ingzorluk+'` \n\n System Language **»** `EN`')
.setFooter('Jendisa', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/behdg6R')
.setColor('BLUE')      
message.channel.send(adım3)
  
db.set(`captchazorluk_${message.guild.id}`, zorluk) 
db.set(`captcharol_${message.guild.id}`, rol.id)
db.set(`captchadil_${message.guild.id}`, "en")    

  })
})
  })
})
      
    })
       
     
     
     }, 20000)
   
   
    
  })
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
  name: 'captcha',
  description: 'taslak', 
  usage: 'captcha'
};
