'use client'

import {createContext, useState} from 'react'
import {Language, onMissingKey, resources} from './I18n'
import {changeLang, init} from '@relocale/i18n'
import {getCookie} from './helpers/getClientCookie'
import {changeLanguage} from '@/utils/api/language'

interface I18nContext {
	language: Language
	setLanguage: (language: Language) => void
}

export interface I18nProviderProps {
	children: React.ReactNode
}

export const I18nContext = createContext<I18nContext>({
	language: 'ru',
	setLanguage() {}
})

export const I18nProvider = ({children}: I18nProviderProps) => {
	const [language, setLanguage] = useState<Language>('ru')
	
	const cookieLang = getCookie('lang')
	
	const isLanguage = (language: string): language is Language => {
		return language === 'en' || language === 'ru'
	}
	
	// Язык был установлен ранее
	if (cookieLang && isLanguage(cookieLang) && cookieLang !== language) {
		console.log('Язык в куки и у пользователя отличаются', cookieLang)
		changeLang(cookieLang)
		setLanguage(cookieLang)
	}

	// Язык устанавливается впервые
	if (!cookieLang) {
		changeLanguage(language)
	}

	init({lang: language, resources, onMissingKey})

	return <I18nContext.Provider value={{language, setLanguage}}>{children}</I18nContext.Provider>
}
