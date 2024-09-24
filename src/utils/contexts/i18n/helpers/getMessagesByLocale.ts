import defaultMessages from '../ru.json' assert { type: 'json' }


type LocaleMessageId = keyof typeof import('../ru.json')
export type Messages = Record<LocaleMessageId, string>
export type Locale = 'ru' | 'en'


export const getMessagesByLocale = (locale: Locale) => {
	try {
		return require(`../${locale}.json`) as Messages
	} catch (error: unknown) {
		console.error('Error loading messages for locale', locale, error)
		
		return defaultMessages
	}
}