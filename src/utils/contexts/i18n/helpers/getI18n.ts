import { createIntl } from 'react-intl'
import { getMessagesByLocale, Locale } from './getMessagesByLocale'

export const getI18n = (locale: Locale) => createIntl({
	locale,
	messages: getMessagesByLocale(locale)
})