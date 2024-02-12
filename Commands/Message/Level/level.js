const { MessageEmbed } = require(`discord.js`);
const db = require("quick.db")

module.exports = {
  name: "level",
  aliases: ["lvl"],
  edesc:"level @user(optional)",
  description: `check level of an user`,
  userPermissions: [],
  botPermissions: [],
  category: "Level",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

    //code

    message.delete()

    let ch = db.get(`levelCh_${message.guild.id}`)
    let status = db.get(`levelStatus_${message.guild.id}`)
    let channel = client.channels.cache.get(ch);
    

    let member = message.mentions.users.first()||message.author
    let memberId = member.id
    let level = db.get(`level_${memberId}_${message.guild.id}`) || 0    
    let msg = db.get(`MsgS_${memberId}_${message.guild.id}`) || 0    

      let emb = new MessageEmbed()

        .setColor("RANDOM")
        .setTitle("🎉 Level Details !  ")
        .setThumbnail(member.displayAvatarURL({dynamic : true}))
        .addField(`<a:ARROW:955461848734531604> The current level of :ㅤ`,`ㅤㅤ╰-𒆕${member} is Level ${level} !`)
        .addField(`<a:ARROW:955461848734531604> The current msg count of :ㅤ`,`ㅤㅤ╰-𒆕${member} is  ${msg} msgs !`)
        .setTimestamp()

    
    if(status != "active")
      emb.addField(`⚠️WARNING`,`Level system is not set up. \n Use \`${process.env.PREFIX}lsetup\` to set it up ! `)
    else{
      if(!channel)
      emb.addField(`⚠️WARNING`,`Level system is on hold as log channel has been deleted \n Use \`${process.env.PREFIX}lremove\` followed by \`${process.env.PREFIX}lsetup\` `)
    }

      message.channel.send({ embeds: [emb] })

    
    

  }
}