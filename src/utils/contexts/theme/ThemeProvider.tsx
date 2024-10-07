'use client'


import {createContext, useState} from 'react'


export type Theme = 'light' | 'dark'

interface IThemeContext {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export interface IThemeProviderProps {
	children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContext>({
	theme: 'light',
	setTheme() {}
})

export const ThemeProvider = ({children}: IThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>('light')

	return <ThemeContext.Provider value={{theme, setTheme}}>
		{children}
	</ThemeContext.Provider>
}