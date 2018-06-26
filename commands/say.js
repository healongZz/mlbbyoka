const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !").then(msg => msg.delete(6000));
  let ChannelName = args[0];
  let say = args[1];
  let Channel = message.guild.channels.find("name", ChannelName);
  Channel.send(say);
       message.delete();
    }   
    
