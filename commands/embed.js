const Discord = require("discord.js");
const send = require('quick.hook');

exports.run = (client, message, Discord, prefix) => {

const args = message.content.splice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

const embed = new Discord.RichEmbed()
.setDescription(args.join))
send(message.channel, embed, {
  name: "Embed",
}

}
