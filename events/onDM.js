const client = require("..");
//const simplydjs = require("simply-djs")

client.on(`messageCreate`, async (message) => {
  if (message.author.bot) return;
  
  //if(message.channel.type === "DM"){simplydjs.chatbot(client, message, {channelId: message.channel.id}).catch((err)=>{console.log(err)})}
    if(message.channel.type === "DM")
  {
    message.channel.send("**Sorry I dont answer to DMs**")
    message.channel.send("*ㅤㅤ But here's some help if you need :*")
    let  emb = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Fuego <:BOT:973462172464209971>  SUPPORT")
    .addField("<:alarm:973255058147917844> Please Join Support Server For Any Queries/Feedback",`ㅤㅤ<:warr:973254876370989086> [**Support Server**](https://discord.gg/Hcyd2yA7Va) ← **Click To Join**`)
    .addField("<:alarm:973255058147917844> Not Satisfied? Contact DEV ?",
              `ㅤㅤ<:warr:973254876370989086> **Developer** → \`𝐅𝐗™〢PΛIN ᴴᴱˣ#4005\` \nㅤ ㅤ ㅤ ╰-𒆕 You may copy the username and tag and DM him ❤️`)
    .setTimestamp()
    
  message.channel.send({embeds : [emb]})
  }
})