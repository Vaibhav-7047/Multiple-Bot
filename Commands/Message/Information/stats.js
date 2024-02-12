const { Message, MessageEmbed, version } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");
let os = require("os");
let cpuStat = require("cpu-stat");

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: `see stats of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,


  run: async (client, message, args, prefix, queue) => {
    // Code
    message.delete()

    
  let totalSeconds = message.client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
            
  let uptime = `${days}d ${hours}h ${minutes}m and ${seconds}s `;

        let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map((guild) => guild);
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
            }
            if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;
      cpuStat.usagePercent(function(err, percent, seconds) {
        message.channel.send({
          embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
              .setAuthor({
                name: client.user.username ,
                iconURL: client.user.displayAvatarURL({ dynamic: true }),
              })
              .addFields (
                { 
                    name: `<a:latency:1023184730226708480> • **Ping**`, 
                    value: `\`\`\`${client.ws.ping}ms\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<:e_guilds:1023184057611329557> • **Servers**`, 
                    value: `\`\`\`Total: ${client.guilds.cache.size} servers\`\`\``, 
                    inline: true 
                },
                {
                    name: `<:users:1045302625446412328> • **Users**`,
                    value: `\`\`\`Total: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} users\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<:nodejs:1041244181089230878> • **Node Version**`, 
                    value: `\`\`\`v${process.versions.node}\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<a:discord:1045303112094724156> • **Discord.js**`, 
                    value: `\`\`\`v${version}\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<a:clock:1040255384956440606> • **Uptime**`, 
                    value: `\`\`\`${uptime}\`\`\``, 
                    inline: true 
                },               
                { 
                    name: `<:MemoryUsage:1045303485253554216> • **Arch**`, 
                    value: `\`\`\`${os.platform()} ${os.arch()}\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<:usage48:1045303351358803980> • **CPU usage**`, 
                    value: `\`\`\`${percent.toFixed(2)} %\`\`\``, 
                    inline: true
                },
                { 
                    name: `<:RAM:1045303194256941086> • **RAM usage**`, 
                    value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} mb\`\`\``, 
                    inline: true 
                },
				{ 
                    name: `<a:fmusic:1039873782174711898> • **Music**`, 
                    value: `\`\`\`Singing ${connectedchannelsamount} Servers\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<a:owner:1034867756534865971> • **Developers**`, 
                    value: `\`\`\`𝐅𝐗™〢PΛIN ᴴᴱˣ#4005\`\`\``, 
                    inline: true 
                },
                { 
                    name: `<:CPU:1045303254378098758> • **CPU of Virtual Private Server (Pterodactyl)**`, 
                    value: `\`\`\`${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``, 
                    inline: false 
                }
            )
              .setFooter(`Dashboard / Website - https://dash.painfuego.repl.co`)

          ],
        });
      });
  },
};
