import { createContext } from 'react'


export type Theme = 'light' | 'dark'

interface ThemeContext {
	theme: Theme
}

export interface IThemeProviderProps extends ThemeContext {
	children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext>({theme: 'light'})

export const ThemeProvider = (props: IThemeProviderProps) => <ThemeContext.Provider value={{theme: props.theme}} {...props} />