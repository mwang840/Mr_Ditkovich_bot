const Discord = require("discord.js");

/**
*  @param {Client} client
*  @param {Message message
*  @param {String} args
*/
module.exports = {
    name: "announce",
    aliases: [],
    description: "Announcement(s)",
    category: "servers",
    usage: "announce <#channel> <#message>",
    execute: async (client, message, args) => {
    
        if(!args.length) return message.channel.send('Usage !announce <#channel> <#message>')
        
        const text = args.join(" ")
        if(text.length < 1) return message.reply("Can't Announce anything Please tell us what to announce!");

        const des1 = args.slice(1).join(" ");

        const AnnounceEmbed = new Discord.MessageEmbed()
        .setTitle('servers announcements')
        .setColor("RANDOM")
        .addField("Announcements By:", `${message.author}`)
        .addField("Announcements On:", `${message.createdAt}`)
        .setDescription(des1);

        message.channel.send(AnnounceEmbed)
        
    }
}