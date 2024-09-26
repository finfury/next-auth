'use client'

import {I18nProvider, I18nProviderProps} from '@/utils/contexts/i18n/I18nProvider'
import {IThemeProviderProps, ThemeProvider} from '@/utils/contexts/theme/ThemeProvider'
import {
	ThemeProvider as ThemeProviderMUI,
	createTheme as createThemeMUI
} from '@mui/material/styles'

interface ProvidersProps {
	children: React.ReactNode
	theme: Omit<IThemeProviderProps, 'children'>
	i18n: Omit<I18nProviderProps, 'children'>
}

export const Providers = ({children, i18n, theme}: ProvidersProps) => (
	<ThemeProvider {...theme}>
		<ThemeProviderMUI theme={createThemeMUI({palette: {mode: theme.theme}})}>
			<I18nProvider {...i18n}>{children}</I18nProvider>
		</ThemeProviderMUI>
	</ThemeProvider>
)
