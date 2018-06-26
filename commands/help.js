exports.run = (client, message, Discord, prefix) => {
message.delete(900);
message.channel.send("```Commands List\n\n• say = say || say <channel> <Text>\n• ping = bot ping || ping```").then(m => m.delete(9000));
message.react("📝");

}
