const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 
let s = args.slice(0).join(' ');  
  
if(!s) return message.reply('You must enter the text to be converted.').then(f => f.delete(5000))
if(s.length > 500) return message.reply('The text can contain max 300 characters.').then(f => f.delete(5000))  
  
let bu = s.replace("a","A̷").replace("b","̷B̷").replace("c","̷C̷").replace("ç","̷Ç̷").replace("d","̷D̷").replace("e","̷E̷").replace("f","F̷").replace("g","G̷").replace("ğ","Ğ̷").replace("h","H̷").replace("ı","I̷").replace("i","İ̷").replace("j","J̷").replace("k","K̷").replace("l","L̷").replace("m","̷M̷").replace("n","N̷").replace("o","O̷").replace("ö","Ö̷").replace("p","̷P̷").replace("r","R̷").replace("s","S̷").replace("ş","Ş̷").replace("t","T̷").replace("u","U̷").replace("ü","Ü̷").replace("v","V̷").replace("y","Y̷").replace("z","̷Z̷").replace("w","W̷").replace("q","Q̷").replace("x","X̷").replace("A","A̷").replace("B","̷B̷").replace("C","̷C̷").replace("Ç","̷Ç̷").replace("D","̷D̷").replace("E","̷E̷").replace("F","F̷").replace("G","G̷").replace("Ğ","Ğ̷").replace("H","H̷").replace("I","I̷").replace("İ","İ̷").replace("J","J̷").replace("K","K̷").replace("L","L̷").replace("M","̷M̷").replace("N","N̷").replace("O","O̷").replace("Ö","Ö̷").replace("P","̷P̷").replace("R","R̷").replace("S","S̷").replace("Ş","Ş̷").replace("T","T̷").replace("U","U̷").replace("Ü","Ü̷").replace("V","V̷").replace("Y","Y̷").replace("Z","̷Z̷").replace("W","W̷").replace("Q","Q̷").replace("X","X̷")
  
message.channel.send('**'+bu+'**') 

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'generator',
  description: 'taslak', 
  usage: 'generator'
};

