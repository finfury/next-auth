'use client'

import {createTheme, ThemeProvider as ThemeMUIProvider} from '@mui/material/styles'
import {createContext, useState} from 'react'
import {getCookie} from '../i18n/helpers/getClientCookie'
import {changeTheme} from '@/utils/api/theme'

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

	const cookieTheme = getCookie('theme')
	
	const isTheme = (theme: string): theme is Theme => {
		return theme === 'dark' || theme === 'light'
	}
	
	// Тема была установлена ранее
	if (cookieTheme && isTheme(cookieTheme) && cookieTheme !== theme) {
		console.log('Тема в куки и у пользователя отличаются', cookieTheme)
		changeTheme(cookieTheme)
		setTheme(cookieTheme)
	}

	// Тема устанавливается впервые
	if (!cookieTheme) {
		changeTheme(theme)
	}


	const themeMUI = createTheme({
		palette: {
			mode: theme
		},
		typography: {
			fontFamily: ['Rubic', 'Roboto', 'sans-serif',].join(',')
		}
	})

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<ThemeMUIProvider theme={themeMUI}>{children}</ThemeMUIProvider>
		</ThemeContext.Provider>
	)
}
