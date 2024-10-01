'use client'

import { I18nProvider, I18nProviderProps } from '@/utils/contexts/i18n/I18nProvider'
import { IThemeProviderProps, ThemeProvider } from '@/utils/contexts/theme/ThemeProvider'
import {
	ThemeProvider as ThemeProviderMUI,
	createTheme as createThemeMUI
} from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

interface ProvidersProps {
	session?: any
	theme: Omit<IThemeProviderProps, 'children'>
	i18n: Omit<I18nProviderProps, 'children'>
	children: React.ReactNode
}

export const Providers = ({ children, i18n, theme, session }: ProvidersProps) => (
	<ThemeProvider {...theme}>
		<ThemeProviderMUI theme={createThemeMUI({ palette: { mode: theme.theme } })}>
			<I18nProvider {...i18n}>
				<SessionProvider session={session}>
					{children}
				</SessionProvider>
			</I18nProvider>
		</ThemeProviderMUI>
	</ThemeProvider>
)
