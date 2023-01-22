const { Client } = require("discord.js")
const { TOKEN, TARGET } = require("./config.json")

const client = new Client({ intents: 98045, rest: {timeout: 60000}});
client.once("ready", () => console.log(client.generateInvite({scopes: ["bot"]})));
client.on("messageCreate", message => { if (message.author.id == TARGET) message.reply("shut up")})

client.login(TOKEN)