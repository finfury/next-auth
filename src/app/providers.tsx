'use client'

import {IThemeProviderProps, ThemeProvider} from '@/utils/contexts/theme/ThemeProvider'
import {
	ThemeProvider as ThemeProviderMUI,
	createTheme as createThemeMUI
} from '@mui/material/styles'
import {SessionProvider} from 'next-auth/react'

interface ProvidersProps {
	session?: any
	theme: Omit<IThemeProviderProps, 'children'>
	children: React.ReactNode
}

export const Providers = ({children, theme, session}: ProvidersProps) => (
	<ThemeProvider {...theme}>
		<ThemeProviderMUI theme={createThemeMUI({palette: {mode: theme.theme}})}>
			<SessionProvider session={session}>{children}</SessionProvider>
		</ThemeProviderMUI>
	</ThemeProvider>
)
