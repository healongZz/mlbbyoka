const Discord = require("discord.js");
const meme = require("memejs");
const sen = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {

meme(function(data) {
const embed = new Discord.RichEmbed()
.setTitle(data.title[0])
.setColor("RANDOM")
.setImage(data.url[0])

send(message.channel, embed, {

 name: "Meme Genarator :",
 icon: 'https://cdn.discordapp.com/attachments/461109418315087872/461123891511951371/b0a2c19e3aed899a1c3dbf0ed9dc6af3_icon.png'
   })

 })

}
