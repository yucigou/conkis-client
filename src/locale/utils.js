import template from 'lodash.template'
import translations from 'locale/translations'

export function supplant(text, args) {
    const compiled = template(text)
    return compiled(args)
}

export function getTranslate(text, language = 'en') {
    if (language === 'en') return text
    const text_trimed = text.trim()
    if (
        translations.hasOwnProperty(text_trimed) &&
        translations[text_trimed].hasOwnProperty(language)
    ) {
        return translations[text_trimed][language]
    }
    console.log(`Translation not found: "${text_trimed}"`)
    return text
}
