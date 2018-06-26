const Discord = require("discord.js");
const send = require('quick.hook');

exports.run = (client, message, Discord, prefix) => {

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();
let say = args.join(" ");
const embed = new Discord.RichEmbed()
.setDescription(say);

send(message.channel, embed, {
  name: "Embed",
 })

}
