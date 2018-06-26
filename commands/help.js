const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {
message.delete(3000);

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Commands List :")
.setDescription("`ping`  `embed`  `say`")

send(message.channel, embed, {
   name: "EmojiList",
   icon: "https://www.vexels.com/png-svg/preview/134792/3d-smile-emoticon-emoji"
})

message.react("📝");

}
