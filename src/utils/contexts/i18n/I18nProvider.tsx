'use client'

import {createContext, useEffect, useState} from 'react'
import {Language, onMissingKey, resources} from './I18n'
import {changeLang, init} from '@relocale/i18n'
import {getCookie} from './helpers/getClientCookie'

interface I18nContext {
	language: string
	setLanguage: (language: Language) => void
}

export interface I18nProviderProps {
	children: React.ReactNode
}

export const I18nContext = createContext<I18nContext>({
	language: 'ru',
	setLanguage() { }
})

export const I18nProvider = ({children}: I18nProviderProps) => {
	const [language, setLanguage] = useState<Language>('ru')

	init({lang: language, resources, onMissingKey})

	useEffect(() => {
		const cookieLang = getCookie('lang')

		/* Already set */
		if (cookieLang && isLanguage(cookieLang) && cookieLang !== language) {
			changeLang(cookieLang)
			setLanguage(cookieLang)
			return
		}

		/* The first time */
		if (!cookieLang) {
			fetch('http://localhost:3000/api/language', {
				method: 'POST',
				body: JSON.stringify({language})
			}).catch(ex => console.log(ex))
		}
	}, [])

	const isLanguage = (language: string): language is Language => {
		return language === "en" || language === "ru"
	}

	return <I18nContext.Provider value={{language, setLanguage}}>{children}</I18nContext.Provider>
}
