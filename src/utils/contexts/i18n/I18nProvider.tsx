'use client'


import {createContext, useState} from 'react'
import {Language} from './I18n'


interface I18nContext {
	language: string
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

	return <I18nContext.Provider value={{language, setLanguage}}>
		{children}
	</I18nContext.Provider>
}