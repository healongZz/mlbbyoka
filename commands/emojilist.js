const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {

const List = message.guild.emojis.map(e => e.toString()).join(" ");
let gicon = message.guild.iconURL;

const embed = new Discord.RichEmbed()
.setTitle("Emoji List :")
.setThumbnail(gicon)
.setDescription(List)
.setFooter(message.guild.name)
.setTimestamp()

send(message.channel, embed, {
   name: "Emoji List :",
   icon: 'https://cdn.discordapp.com/attachments/461109418315087872/461112492454707211/images.png'
})

}
