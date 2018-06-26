exports.run = (client, message, Discord, prefix) => {
message.delete(3000);
message.channel.send("```Commands List\n\n• say = say || say <channel> <Text>\n• ping = bot ping || ping```").then(m => m.delete(10000));
message.react("📝");

}
