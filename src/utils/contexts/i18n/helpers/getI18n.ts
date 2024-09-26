import { createIntl } from 'react-intl'
import { getMessagesByLocale, Locale } from './getMessagesByLocale'
import { useContext } from 'react'
import { I18nContext } from '../I18nProvider'

export const getI18n = (locale: Locale) => {
	return createIntl({
		locale,
		messages: getMessagesByLocale(locale)
	})
}