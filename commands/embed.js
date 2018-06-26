const Discord = require("discord.js");
const send = require('quick.hook');

exports.run = (client, message, Discord, prefix) => {

message.delete();
  
if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`<@${message.author.id}> , Sorry You Dont Have **MANAGE MESSAGE** To Use This Commands !`).then(m => m.delete(8000));
const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

//let color = args[0];
let say = args[0];
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(say);

send(message.channel, embed, {
  name: "Embed",
  icon: 'https://cdn.discordapp.com/attachments/461109418315087872/461115037780672522/code-icon-script.png'
 })

}
