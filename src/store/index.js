import { createStore } from 'dop'
import { supplant, getTranslate } from 'locale/'

const store = createStore({
    language: 'en',
})

export function Translate({ children, args = {} }) {
    return translate(children, args)
}

export function translate(text, args = {}) {
    return supplant(getTranslate(text, store.state.language), args)
}

export function getGlobalState() {
    return store.state
}
