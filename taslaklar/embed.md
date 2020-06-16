  let yardım = new Discord.RichEmbed()
  .setTitle('CodEming Bot Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Aşağıda CodEming botunun komutları verilmiştir.Bir sorun olursa sunucumuza gelip bizimle iletişime geçebilirsin!')
  .addBlankField()
  .addField('c!ban', 'kullanıcıyı sunucudan yasaklar')
  .addField('c!uyar', 'kullanıcıyı uyarır')
  .addField('c!at', 'kullanıcıyı sunucudan atar')
  .addField('c!reboot', 'botu yeniden başlatır.')
  .setFooter('CodEming Yardım Menüsü Örneği')
  .setTimestamp()
  .setThumbnail('https://goodgamers.biz/wp-content/uploads/2018/12/discord.jpg')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RANDOM')
  message.channel.send(yardım)
  
  
  
   if(message.author.id !== ayarlar.sahip) {
let bakımda = new Discord.RichEmbed()
.setTitle('Bot Şuan Bakımda!')
.setDescription('Lover bot kurucu tarafından bakıma alındı.!')
.addField('Bakım Sebebi:', '**Yeni güncelleme,hata düzeltmeleri.**')  
.setColor('RED')  
.setFooter('beklettiğimiz için üzgünüz..')
  message.channel.send(bakımda)
  return
 }