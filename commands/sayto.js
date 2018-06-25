exports.run = (client, message, Discord, prefix) => {
  
let channelName = args[0];
let say = args[1];
let ChannelFind = message.guild.channels.find("name", channelName);

ChannelFind.send(say);

    

 }

