import { createStore } from 'dop'
import { CONNECTION } from 'const'

export const store = createStore({
    connection: CONNECTION.CLOSE,
    connection_trys: 0,
    language: 'es',
})

export function getGlobalState() {
    return store.state
}

export function setGlobalState(patch) {
    store
        .applyPatch(patch)
        .filter(({ mutations }) => mutations.length > 0)
        .forEach(({ listener, patch }) => listener(patch))
}
