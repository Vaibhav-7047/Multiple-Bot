const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h", "cmds", "commands"],
  edesc:"help",
  description: `need help ? see my all commands`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 1000 })

    const emoji = {
      Channel:"<a:Star_hashtag:994906236652892190>",
      Fun:"<a:Star_dance:994906525741097020>",
      Games:"<a:Games:1045340354456604782>",
      Information:"<:info:1033657231197089813>",
      Level:"<a:stolen_emoji:1045342090814574702>",
      Moderation:"<a:harvex_automod:1035069596245434448>",
      Music:"<a:Music:1045338460573138995>",
      Settings:"<a:utility:1045339336553549915>",
      Utility:"<a:badges:1035071318913204274>",
    };

    const desc = {
      Channel:"View commands related to channels",
      Fun:"View commands that are fun related",
      Games:"View commands that can be used to play games",
      Information:"View commands to get info about bot",
      Level:"View commands that can be used for level system",
      Moderation:"View commands that can be used for moderation",
      Music:"View music related commands",
      Settings:"View setup and settings related commands",
      Utility:"View utility related commands",
    };



    let raw = new MessageActionRow().addComponents([
      new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder(`Skylight Help Menu . . .`)
        .addOptions([
          {
            label: `Home`,
            value: "home",
            emoji: `<:home:1025681784110841906>`,
            description: `Click to go to Homepage`,
          },
          client.mcategories.map((cat) => {
            return {
              label: `${cat.toLocaleUpperCase()}`,
              value: cat,
              emoji: emoji[cat],
              description: desc[cat],
            };
          }),
        ]),
    ]);

    let help_embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor({
        name: client.user.username + ` Help Menu`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setFooter("This Command Will Be Deactivated After 60sec.")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setDescription(" **__Skylight.xyz__** is now on **[Top.gg](https://top.gg/bot/917327380379500595/vote)**\n To support our work please vote us on **[Top.gg](https://top.gg/bot/917327380379500595/vote)**\n\n > <:kronixCrown:1075039553976549386> **__My Categories are__** :\n\n >>> <:exclamation_kastro:1064433487337242665> `::` Information\n<:music__kastro:1064440924190539888> `::`  Music\n<:Icons_utility:1069995603381211146> `::`  Setup\n<:ban_kastro:1064433468009881630> `::`  Moderation\n<:boost_kastro:1064440926996541491> `::`  Ranking\n<:giveaway_kastro:1064433461831680060> `::` Giveaway\n<:Invites:1069998245608181800> `::` Ticket\n<:kronix_member:1075040201195393074> `::` Utility")
        .addField("<:kronixCrown:1075039553976549386> **__STATS:__**",
  `>>> <:api_latency_kastro:1064433448242122803> on **${client.guilds.cache.size} Servers**\n<:ping_kastro:1064433484501876826>  **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
      

    let main_msg = await message.channel.send({
      embeds: [help_embed],
      components: [raw],
    });

    let filter = (i) => i.user.id === message.author.id;
    let colector = await main_msg.createMessageComponentCollector({
      filter: filter,
      time: 60000,
    });
    colector.on("collect", async (i) => {
      if (i.isSelectMenu()) {
        await i.deferUpdate().catch((e) => { });
        if (i.customId === "help-menu") {
          let [directory] = i.values;
          if (directory == "home") {
            main_msg.edit({ embeds: [help_embed] }).catch((e) => { });
          } else {
            main_msg
              .edit({
                embeds: [
                  new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(
                      `${emoji[directory]} ${directory} Commands ${emoji[directory]}`
                    )
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setDescription(
                      `>>> ${client.mcommands
                        .filter((cmd) => cmd.category === directory)
                        .map((cmd) => {
                          return `<a:Dot_kastro:1064407232999080006> ** ${cmd.name}** → ${cmd.description} \n`;
                        })
                        .join("")}`
                    )
                  .setFooter(client.getFooter(message.author)),
                ],
              })
              .catch((e) => null);
          }
        }
      }
    });

    colector.on("end", async (c, i) => {
      raw.components.forEach((c) => c.setDisabled(true));
      main_msg.edit({ components: [raw] }).catch((e) => { }).then(msg => {
        setTimeout(() => msg.delete(), 1000)
      })
    });
  },
};
