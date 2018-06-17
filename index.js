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
    let memberjoin = member.guild.channels.find('name', "join-logs");
const embed = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/457498142129127427/457779145636577292/MobileLegendCommunity.png")
.setColor('RANDOM')
.setFooter('🎉 MEMBER JOIN !')
.setTimestamp()
    .setDescription(`WELCOME **[ ${member} ]** TO **${member.guild.name}** SERVER  , YOU ARE A MEMBER : **${member.guild.memberCount}**`);
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
    
    
    
    
    
});

client.login(process.env.TOKEN);
