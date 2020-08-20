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
});﻿

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "propozycja") {
    if (message.author.bot) return;
      if(!message.channel.guild) return message.reply('ta');
    let say = new Discord.RichEmbed()
  .setTitle("Od " + message.author.username)
  .setThumbnail(message.author.avatarURL)
  .setAuthor("PROPOZYCJA")
    .setDescription(args.join("  "))
    .setColor(12248579)
      .setFooter(" ")
    message.guild.channels.find('name','propozycje').send(say).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
    });
    message.author.send("**- Dziękujemy za oddanie propozycji** :heart:");

    message.delete();
  }


});

client.on('message', async message => {

  let command = message.content.split(" ")[0];

if (command == "$rip") {

  const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 50;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 3}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 85);

    // Return the result to use in the actual canvas
    return ctx.font;
};

    const canvas = Canvas.createCanvas(252, 297);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./rip.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const args = message.content.split(" ").slice(1);
    const sayMessage = args.join(" ");

    // Assign the decided font to the canvas
    ctx.font = applyText(canvas, message);
    ctx.fillStyle = '#000000';
    ctx.fillText(sayMessage, canvas.width / 4, canvas.height / 1.7);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'rip.png');

    message.channel.send(attachment)
    message.delete();

  }
});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Let's go with a few common example commands! Feel free to delete or change those.

    if (command === "nigdytegoniezgadniesz913xdjg") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });
        // And we get the bot to say the thing:
        const embed = {
            "title": "Hej! Zweryfikuj konto",
            "description": `${sayMessage}`,
            "color": 11041206
        };
        message.channel.send({ embed });
}
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$twojstary')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **Twój stary pijany** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./twojstary.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$fakeping')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **Fake ping** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./fakeping.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Let's go with a few common example commands! Feel free to delete or change those.

    if (command === "ogloszenie") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });
        // And we get the bot to say the thing:
        const embed = {
            "title": ":bell: OGŁOSZENIE",
            "description": `${sayMessage}`,
            "color": 16777215
        };
        message.channel.send({ embed });
}
});

client.on("message", message => {
  if (message.content.startsWith('$botinfo')) {
    const embed4 = new Discord.RichEmbed()
      .setTitle(":information_source: Informacje ")
      .setTimestamp()
      .setColor(7492269)
      .addField(":shield: Wersja",
        "1.0", true)
      .addField(":bust_in_silhouette:  Autorka",
        "Clementine#0001", true)
      .addField(":busts_in_silhouette:   Użytkownicy bota",
        `${message.client.users.size}`)
      .addField(":desktop: Serwery",
        `${message.client.guilds.size}`, true)
      .addField(":book: Zaproś bota",
        "https://discordapp.com/oauth2/authorize?&client_id=275037811718225920&scope=bot&permissions=12659727", true)
    message.channel.send({ embed: embed4 });
  }
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$sciernisko')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **BRACIA PIERDOLEC - ŚCIERNISKO** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./sciernisko.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  var isReady = true;
  if (isReady && message.content === '$airhorn')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     message.channel.sendMessage(':notes: **Airhorn** zostało odtworzone :notes:');
     const dispatcher = connection.playFile('./Airhorn.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('$avatar <@')) {
    let username =  message.mentions.users.first()
    message.reply(username.avatarURL);
  	}
});	  

client.on('message', message => {
    if (message.content.startsWith('$potato')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`:potato: **Daje ziemniaka dla** ${user}! :potato:`);
  	}
});

client.on('message', message => {
    if (message.content.startsWith('$hug')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`**Przytula** ${user}! :heart:`);
    message.channel.sendFile('https://media0.giphy.com/media/EvYHHSntaIl5m/giphy.gif', 'ZabijSie.gif', 'testmessage');
  	}
});

client.on('message', message => {
    if (message.content.startsWith('$kiss')) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("Nie wykryto użytkownika");
    message.reply(`**Całuje** :revolving_hearts: ${user}! :revolving_hearts: `);
    message.channel.sendFile('https://media0.giphy.com/media/3o7buadz6hvdeqByco/giphy.gif', 'ZabijSie.gif', 'testmessage');
  	}
});

client.on('message', message => {
    if (message.content === '$avatar') {
    	message.reply(message.author.avatarURL);	
  	}
});

client.on('message', async message => {
    if (message.content.startsWith('$clear')) {
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":potato: Nie masz uprawnien :) :potato:")
        const args = message.content.slice(1).trim().split(/ +/g);
        console.log(args);
        const messagecount = parseInt(args[1], 10);
        console.log(messagecount);
        if (!messagecount || messagecount < 2 || messagecount > 200)
            return message.reply('Minimalna liczba wyczyszczenia to 2');
        let fetchmessage = await message.channel.fetchMessages({ count: messagecount });
        message.channel.bulkDelete(messagecount)
        message.channel.sendMessage("**Usunięto** "+messagecount)
    }
}); 

client.on('message', message => {
    if (message.content === '$invite') {
    	message.channel.sendMessage('https://discordapp.com/oauth2/authorize?&client_id=275037811718225920&scope=bot&permissions=12659727'); 
  	}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "say") {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie posiadasz uprawnienia MANAGE_MESSAGES")
   message.delete(1);
   message.channel.sendMessage(args.join("  "))
  }
});

client.on("guildMemberAdd", member => {
    member.user.sendMessage(`Witaj na serwerze **#TeamBakłażan** :hand_splayed:\n\nZalecamy zapoznać się z kanałem **#zasady-info**\n\nJako serwer oferujemy miłą atmosfere jak i częste konkursy.\n\nCała administracja życzy dobrej zabawy :heart:\n\nhttps://discord.gg/bBVWbNd`);
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px impact`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'pisanko');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome-image.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.font = '35px impact';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Witaj na serwerze', canvas.width / 3.2, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 3.2, canvas.height / 1.7);

	ctx.beginPath();
	ctx.arc(120, 125, 90, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 20, 25, 190, 190);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`:eggplant: **${member}** **Właśnie dołączył na serwer! Zerknij do regulaminu i baw się dobrze** :eggplant:`, attachment);
});
    
client.on('message', message => {
    if (message.content === '$8ball') {
      message.channel.send(':no_entry: | Użyj tego poprawnie: `$8ball <pytanie>`\n\n:no_entry: | Przykład: `$8ball Czy eli jest mądra?`\n\n:question: | Więcej komend znajdziesz pod: `$help`'); 
  	}
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "8ball ")) {
    const coin = ['Tak, definitywnie','Nope','Chyba żartujesz...','Tak','Pojebało cię','Nie','Lepiej by Ci teraz nie mówić','Zapytaj ponownie','Nie mogę teraz odpowiedziec', 'Jak najbardziej', 'Yeah', 'Haha dobry żart',];
    const random = Math.floor(Math.random()*12);
    message.channel.send(":8ball: | "+coin[random]);
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + "flip")) {
    const coin = ['Orzeł','Reszka'];
    const random = Math.floor(Math.random()*2);
    message.channel.send("**Wypadło na** | "+coin[random]);
  }
});

client.on('message', message => {
  if (message.content === prefix + 'dice') {
    message.channel.send({embed: {
  color: 16672492,
  description: Math.floor(Math.random() * 9) + 1,
  title: " ",
  author: {
  name: "Wylosowałeś", 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": "https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640"
    },
}});
  }
});

client.on('message', message => {
  if (message.content === prefix + 'serverinfo') {
    message.channel.send({embed: {
  color: 3447003,
  description: (`**Nazwa serwera**: ${message.guild.name}\n\n**Wszystkie osoby**: ${message.guild.memberCount}\n\n**Data utworzenia**: ${message.guild.createdAt}\n\n**ID**: ${message.guild.id}\n\n**Role**: ${message.guild.roles.size}\n\n**Właściciel**: ${message.guild.owner}`),
  title: " ",
  author: {
  timestamp: new Date(),
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
    },
  name: message.guild.name, 
  icon_url: message.guild.iconURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": message.guild.iconURL
    },
}});
  }
});

client.on('message', message => {
  if (message.content === prefix + 'info') {
    message.channel.send({embed: {
  color: 10721349,
  description: (`Pełna nazwa ${message.author.username}\nTwoje ID: ${message.author.id}\nKonto stworzone: ${message.author.createdAt}`),
  title: " ",
  author: {
  timestamp: new Date(),
  footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
    },
  name: message.author.username, 
  icon_url: message.author.avatarURL
    },
  image: {
  "url": " ",
    },
  thumbnail: {
  "url": message.author.avatarURL
    },
}});
  }
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

client.on('message', message => {
    if (message.content === '$random') {
    	message.channel.sendFile('https://source.unsplash.com/random', 'TwojaStara.png', 'testmessage');
  	}
});

client.on('message', message => {
    if (message.content === '$cat') {
    	message.channel.sendFile('http://thecatapi.com/api/images/get?format=src&type=gif', 'TwojaStara.gif', 'testmessage');
  	}
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
