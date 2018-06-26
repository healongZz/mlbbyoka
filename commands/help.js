const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {
message.delete(3000);

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Commands List :")
.setDescription("`ping`  `embed`  `say`")

message.channel.send(embed);

message.react("📝");

}
