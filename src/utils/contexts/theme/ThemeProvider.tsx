import { createContext } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContext {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export interface IThemeProviderProps extends ThemeContext {
	children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext>({ theme: 'light', setTheme() { } })

export const ThemeProvider = ({ theme, setTheme, ...props }: IThemeProviderProps) => (
	<ThemeContext.Provider value={{ theme, setTheme }} {...props} />
)
