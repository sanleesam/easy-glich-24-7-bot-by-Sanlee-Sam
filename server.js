const Discord = require('discord.js'); 
const client = new Discord.Client(); 

client.once('ready', () => { 
	console.log('Ready!'); 
  client.user.setActivity(`YOUR_CUSTOM_STATUS_GOES_HERE`); 
});

client.on("message", message => {  
  if(message.content === "!ping") { 
    return message.channel.send(`Pong ${client.ws.ping}`); 
  }
});

client.login('your-token-goes-here');
