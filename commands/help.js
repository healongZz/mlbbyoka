const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, Discord, prefix) => {
//message.delete(3000);

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Commands List :")
.setDescription("`ping`  `embed`  `say`  `emojilist`")

send(message.channel, embed, {
   name: "Commands List :",
   icon: 'https://cdn.discordapp.com/attachments/461109418315087872/461109442830925845/1891026.png'
})

message.react("📝");

}
