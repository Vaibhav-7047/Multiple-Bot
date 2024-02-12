const client = require("../index");
const Discord = require(`discord.js`);
const chalk = require('chalk');
const simplydjs = require("simply-djs");

let statuses = [
                "$help | @Ka$tro ",
                ]
let e = statuses.length

function status()
  {
i = Math.floor(Math.random() * (e))
client.user.setActivity(statuses[i]
  ,
  {
    type: "WATCHING",
  });
    
  }


client.on("ready", async () => {

simplydjs.connect(process.env.MONGO)

setInterval(status,3000)

console.clear()
console.log(chalk.bgBlack(chalk.greenBright(`═════════════════════════════════════════════`)));
console.log(chalk.magenta(`
Ka$tro | Ka$tro Forever
`))
    console.log(chalk.bgBlack(chalk.magentaBright(`═════════════════════════════════════════════`)));
    console.log(chalk.yellowBright("Ka$tro | Online And Fully Functional"))
    console.log(chalk.bgBlack(chalk.yellowBright(`═════════════════════════════════════════════`)))

    console.log(chalk.cyanBright(`Ka$tro | Node: ${process.version}
Ka$tro | Discord.js: ${Discord.version}
Ka$tro | Connected as: ${client.user.username}
Ka$tro | ID: ${client.user.id}
Ka$tro | Owner: ⍟ ・🜲 ARJUN`));
    console.log(chalk.bgBlack(chalk.cyanBright(`═════════════════════════════════════════════`)))
    console.log(chalk.red(`Ka$tro | Currently watching ${client.guilds.cache.size} Servers`));
    console.log(chalk.bgBlack(chalk.red(`═════════════════════════════════════════════`)));
    })


  

  
  // loading database
  require('../handlers/Database')(client)

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild)
  })
