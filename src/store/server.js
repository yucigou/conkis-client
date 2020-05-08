// import { createNode } from 'dop'
import { getGlobalState, setGlobalState } from 'store/'
import { CONNECTION } from 'const'

let timeout

function connect(url) {
    clearTimeout(timeout)
    const state = getGlobalState()
    if (state.connection === CONNECTION.CLOSE) {
        const ws = new WebSocket(url)
        // const server = createNode()
        setGlobalState({ connection: CONNECTION.CONNECTING })
        ws.onopen = async () => {
            setGlobalState({
                connection: CONNECTION.OPEN,
                connection_trys: 0,
            })
        }
        ws.onclose = (e) => {
            const connection_trys = state.connection_trys + 1
            setGlobalState({
                connection: CONNECTION.CLOSE,
                connection_trys,
            })
            timeout = setTimeout(reconnect, connection_trys * 1000)
        }
    }
}

export function reconnect() {
    const url = `ws://localhost:8080/ws`
    // console.log('reconnect')
    connect(url)
}

reconnect()
