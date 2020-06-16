const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Jendisa aktif. ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet veriyor.`);
  client.channels.get('653288401814028308').join()
  client.user.setStatus("dnd");
   var oyun = [

"⭐ » Do you want to add me? | r!invite",
"⭐ » Safer with Jendisa!",
"🌟 » "+client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +" Users!",     
"💞 » Use me with > r! <",     
"🍀 » English and turkish language support",
"r!help || r!settings || r!yardım",    
"💎 » Blacklist Words relased! > r!moderation || r!moderasyon <"

     
  ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "dnd");
        }, 2 * 13000);
}
