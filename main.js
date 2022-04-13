const Discord = require ("discord.js")
require("dotenv").config()
const TOKEN = "OTYzMjI1MDUzOTA5MTA2Nzg4.YlS_PA.0QNnhOLdlrszvlCGo0h1uYslAlM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)