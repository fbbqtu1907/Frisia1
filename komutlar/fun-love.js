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
  
  if(user.id === message.author.id) {
let seviyor = new Discord.RichEmbed()
  .setTitle("It's not funny")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Apparently "+user+" loves herself. It's boring to be so arrogant.")
  .setFooter('Jendisa Fun Commands',message.author.avatarURL)
  .setImage('https://media.giphy.com/media/26DNadOmFSQXL4ucM/giphy.gif')
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('RED')    
  message.channel.send(seviyor)
  return
  }
 
  let random = ["http://49.media.tumblr.com/815f725a09b460d2d3b39ed3af43eccc/tumblr_nb89z92gL01tj9b2so1_500.gif","https://i.gifer.com/Txh9.gif","https://i.pinimg.com/originals/7a/72/69/7a72691a20eaefe593007f592544bbf1.gif","https://i.pinimg.com/originals/02/2a/19/022a19f8ad9260b5045e16289e66c903.gif","https://media3.giphy.com/media/od5H3PmEG5EVq/giphy.gif","https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750"]
  let gif = (random[Math.floor(Math.random() * random.length)])
  
 let seviyor = new Discord.RichEmbed()
  .setTitle("It's good to be loved")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription(user + ",you know that s is loved by "+message.author+"? <a:hh:639135059051413524>")
  .setFooter('Jendisa Fun Commands',message.author.avatarURL)
  .setImage(gif)
  .setTimestamp()
  .setURL('https://discord.gg/behdg6R')
  .setColor('#D608FF')    
  message.channel.send(seviyor) 
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sev'], 
  permLevel: 0
};

exports.help = {
  name: 'love',
  description: 'taslak', 
  usage: 'love'
};
