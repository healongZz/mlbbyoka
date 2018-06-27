exports.run = (client, message, Discord, prefix) => {

const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

let color = args[0];

const embed = new Discord.RichEmbed()
.setColor(`#{color}`)
.setTitle(`Color Code : ${color}`)

await send(message.channel, embed, {
 name: "Color Preview :"
 icon: 'https://cdn.discordapp.com/attachments/461109418315087872/461351786683564032/256-256-d946229cc05198d4c132c8f351f2b045.png'
})

}
