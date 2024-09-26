import React, {createContext, useState} from 'react'
import {IntlProvider} from 'react-intl'
import {Messages} from './helpers/getMessagesByLocale'

export type Locale = 'ru' | 'en'

interface I18nContext {
	locale: Locale
	messages: Messages | {}
	setLocale: (locale: Locale) => void
}

export interface I18nProviderProps extends I18nContext {
	children: React.ReactNode
}

export const I18nContext = createContext<I18nContext>({locale: 'ru', messages: {}, setLocale() {}})

export const I18nProvider = ({locale, messages, setLocale, ...props}: I18nProviderProps) => {
	return (
		<I18nContext.Provider value={{locale, messages, setLocale}}>
			<IntlProvider locale={locale} messages={messages} {...props} />
		</I18nContext.Provider>
	)
}
