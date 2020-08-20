client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send({embed: {
  color: 101981,
  description: (':ping_pong:  `' + `${Date.now() - message.createdTimestamp}` + ' ms`'),
  title: " ",
  author: {
  name: "Twój ping to", 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": " "
    },
}});
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
