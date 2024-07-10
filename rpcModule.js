const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "no days off",
                    state: 'no days off',
                    assets: {
                        large_image: "https://images.wallpapersden.com/image/wxl-glowing-sharingan-hd-naruto_80178.jpg",
                        large_text: "Scrypts"
                    },
                    buttons: [{
                        label: "Download",
                        url: "https://youtu.be/JjjP-69L3b8"
                    }]
                }
            })
        })

        rpcClient.login({
            clientId: '609521468887400559'
        }).catch(() => {}).then(() => console.log('RPC connected!'))
    }
}

module.exports = RPC
