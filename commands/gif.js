exports.run = (client, message, Discord, prefix) => {
  
if (message.author.bot) return;
//  if (message.channel.type == "dm") return;

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.author.send(embed);
    });

    message.channel.send(embed);

 }
};
