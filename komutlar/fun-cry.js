const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let gold = await db.fetch(`gold_${message.author.id}`)
  
if(!gold)  {
 message.channel.send('Only Gold Members can use this command.! :(').then(s => s.delete(7000))
  message.react('❌')
  return
}
  
  let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author
   
  let random = ["https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif","https://49.media.tumblr.com/222f7395f274c910a0d34562a2be01fd/tumblr_nxm5cltgCv1rfx24fo1_500.gif","https://data.whicdn.com/images/52693776/original.gif","http://p.favim.com/orig/2018/08/31/cry-gif-anime-Favim.com-6203281.gif","https://media3.giphy.com/media/I2wJw3hlGM7M4/giphy.gif","https://thumbs.gfycat.com/AcclaimedOilyAcornbarnacle-max-1mb.gif","https://media1.tenor.com/images/f599a1ef6bc94b0dad2f87a93683fe76/tenor.gif?itemid=5947375","http://s3.favim.com/orig/151216/anime-anime-gif-anime-girl-black-and-white-Favim.com-3771853.gif","https://78.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif"]
  
  let gif = (random[Math.floor(Math.random() * random.length)])
  if(user.id === message.author.id) {
let seviyor = new Discord.RichEmbed()
  .setTitle("He made himself cry..")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Apparently upset "+user+". Does anyone know why?")
  .setFooter('Jendisa Fun Commands',message.author.avatarURL)
  .setImage(gif)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')    
  message.channel.send(seviyor)
  return
  }
 

  
 let seviyor = new Discord.RichEmbed()
  .setTitle("A sad person loses a lot.")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Apparently upset "+user+". Does anyone know why?")
  .setFooter('Jendisa Fun Commands',message.author.avatarURL)
  .setImage(gif)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('BLUE')    
  message.channel.send(seviyor) 
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ağla'], 
  permLevel: 0
};

exports.help = {
  name: 'cry',
  description: 'taslak', 
  usage: 'cry'
};
