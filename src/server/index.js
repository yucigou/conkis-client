// const url = 'wss://' + window.location.hostname + '/ws'

// // Client
// const ws = new WebSocket(url)
// const server = createNode()
// ws.on('open', async () => {
//     const getCalculator = server.open(ws.send.bind(ws))
//     const { sum, multiply } = await getCalculator()
//     const result1 = await sum(5, 5)
//     const result2 = await multiply(3, 3)
//     console.log(result1, result2) // 10, 9
// })
// ws.on('message', server.message)
