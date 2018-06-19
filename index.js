const Discord = require('discord.js'),
      Chance = require('chance'),
      random = new Chance(),
      parseArgs = require('minimist'),  
      arraySort = require('array-sort'), 
      table = require('table'), 
      send = require('quick.hook');
const config = require("./config");
const fs = require("fs");
const client = new Discord.Client();
const ms = require("ms");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const superagent = require("superagent");
const meme = require('memejs');
const gifSearch = require("gif-search"); 

let prefix = "mlbb ";


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} Servers ..`);
   
   client.user.setActivity(`SERVER`, { type: 'WATCHING' })
  });

client.on("guildMemberAdd", async member => {
    var images = ["https://cdn.discordapp.com/attachments/442655163254308864/458569892233478145/20180619_165111.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569893638438912/20180619_165132.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569894158401537/20180619_165038.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570061461061632/20180619_165333.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570199688413204/20180619_165405.png",];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    let memberjoin = member.guild.channels.find('name', "join-logs");
const embed = new Discord.RichEmbed()
//.setTitle(`${member}`)
.setThumbnail(member.user.avatarURL)
.setImage(randomImage)
.setColor('RANDOM')
.setFooter(`MobileLegends`)
.setTimestamp()
    .setDescription(`WELCOME **${member}** TO **${member.guild.name}** SERVER  , YOU ARE A MEMBER : **${member.guild.memberCount}**`);
memberjoin.sendEmbed(embed);
});   

//client.on("guildMemberRemove", async member => {
    //let memberjoin = member.guild.channels.find('name', "");
//const embed = new Discord.RichEmbed()
//.setThumbnail(member.user.avatarURL)
//.setColor('#FF0000')
//.setFooter('🔴 MEMBER LEFT !')
//.setTimestamp()
  //  .setDescription(`**[ ${member} ]** HAS LEFT **${member.guild.name}** SERVER  , THE SERVER NOW : **${member.guild.memberCount}** USER ! `);
//memberjoin.send(embed);
//});    

client.on("message", async message => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
    
  if(command == "ign") {
        message.delete()
  //  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    if(args[0] == "help"){
    message.channel.send(`${message.author.username} Do ${prefix}ign (**Username** or **ID**) (**SERVER**)\nEx: ${prefix}ign 231831686 TestServer\n\`\`\`ServerList\nOrignlServer\nTestServer\`\`\``).then(msg => msg.delete(11000));
    return;
  }
    let chatchannel = message.guild.channels.find(`name`, "my-profile");
   // if(!chatchannel) return message.channel.send(" !");
  //  message.delete().catch(O_o=>{});
        let nameid = args[0];
        let server = args[1];
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(`RANDOM`)
        .addField(`Username/ID`, nameid)
        .addField(`SERVER`, server)
        .setFooter("Add Me Now !")
    chatchannel.send(embed);
    await message.channel.send(`${message.user.username} Your Username/Id Has Been Send To <#457884463829876737>  📤`)
   }

      if(command === "setrolecolor") {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permssion MANAGE_ROLES to use this !").then(msg => msg.delete(7000));
  

let role = message.mentions.roles.first() || message.guild.roles.find('name', args[0]);
if(!role) return message.channel.send("You forgot to type or mention a role!");

let color = args.slice(1).join(" ");
if(!color) return message.channel.send("You forgot to type a color hex!");

await role.setColor(color).catch(error => message.channel.send(`Error: \`${error}\``));
await message.channel.send(`\`${role.name}\`'s Color Was Changed To ${role.color}`).catch(error => message.channel.send(`Error: ${error}`));
 
 }
    
    
});

client.login(process.env.TOKEN);
