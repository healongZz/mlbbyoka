const Discord = require("discord.js");
const meme = require("memejs");

exports.run = (client, message, Discord, prefix) => {

meme(function(data) {
const embed = new Discord.RichEmbed()
.setTitle(data.title[0])
.setColor("RANDOM"
.setImage(date.url[0])

message.channel.send(embed);

 })

}
