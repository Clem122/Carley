const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))
const serverStats = {
    guildID: '746030108460056718',
    totalUsersID: '746082964839858247',
    memberCountID: '746087399007977595',
    clock: '746087399007977595',
    time: '746087419371061339',
    newUser: '746087439856173179'
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    let autopisanko = "10s";
    setInterval(function() {
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAMB`);
    client.channels.get(serverStats.clock).setName(`#TEAMB`);
    client.channels.get(serverStats.clock).setName(`#TEAMBA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAK`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAK`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁ`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁ`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻ`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻ`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻA`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻAN`);
    client.channels.get(serverStats.clock).setName(`#TEAMBAKŁAŻAN`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲ ❤`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲ ❤`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲ ❤`);
    client.channels.get(serverStats.clock).setName(`#̲T̲E̲A̲M̲B̲A̲K̲Ł̲A̲Ż̲A̲N̲ ❤`);
}, 600);
 });

client.on('guildMemberAdd', member => {
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`» Użytkowników: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`» Ludzi: ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCount).setName(`» Botów: ${member.guild.members.filter(m => m.user.bot).size}`);
    client.channels.get(serverStats.newUser).setName(`👋 ${member.displayName}`);
 });
 //______________________When someone leaves the server__________________
client.on('guildMemberRemove', member => {
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`» Użytkowników: ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`» Ludzi: ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCount).setName(`» Botów: ${member.guild.members.filter(m => m.user.bot).size}`)
});

client.on("message", (message) => {
  // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "lenny")) {
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
    message.react(":lenny:304276195594207232");
  } else
  if (message.content.startsWith(prefix + "franio")) {
    message.channel.sendFile('https://i.imgur.com/FHxjllM.png', 'TwojaStara.png', 'testmessage');
    message.react("franciszek:383357843799277568")
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.react("oko:325409745278337024");
    message.channel.sendMessage(":mailbox: Sprawdz swoją skrzynke odbiorczą");
    message.author.sendMessage("chuj ci w dupe XD");
  } 
   
});

// NOTE: CURRENTLY BROKEN IN DISCORD.JS 9 THROUGH 11.1. USE THIS INSTEAD:
client.on("ready", () => {
    client.user.setActivity(`Clem jest fajna | Na ${client.guilds.size} serwerach <3`, { type: 'WATCHING' });
});

// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("dnd");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
