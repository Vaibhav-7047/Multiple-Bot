const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "support",
  aliases: ["dev"],
  edesc:"support",
  description: `sends support server's invite link`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code


    message.delete()

    let emb = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Need help ? Join Support Server :")

      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

      .addFields(
        {
          name: "Click Blue Text Below :",
          value: `╰-𒆕 [Contact DEV for support](https://discord.gg/aMC2e8zgQb)`
        }
      )

      .setFooter(client.getFooter(message.author));


    message.channel.send({ embeds: [emb] })

  },
};

