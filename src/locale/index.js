import { supplant, getTranslate } from 'locale/utils'
import { getGlobalState } from 'store/'

export function Translate({ children }) {
    return translate(children)
}

export function translate(text, args = {}) {
    const { language } = getGlobalState()
    return supplant(getTranslate(text, language), args)
}
