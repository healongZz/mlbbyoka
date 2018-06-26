const Discord = require("discord.js");
const send = require('quick.hook');

exports.run = (client, message, Discord, prefix) => {

message.delete();
  
if(message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`<@${message.author.id}> , Sorry You Dont Have **MANAGE MESSAGE** To Use This Commands !`).then(m => m.delete(8000));
const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

let say = args.join(" ");
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(say);

send(message.channel, embed, {
  name: "Embed",
  icon: "https://richmond.instructure.com/courses/7539/pages/embed-code-2"
 })

}
