'use client'

import {I18nProvider} from '@/utils/contexts/i18n/I18nProvider'
import {ThemeProvider} from '@/utils/contexts/theme/ThemeProvider'
import {SessionProvider} from 'next-auth/react'

interface ProvidersProps {
	children: React.ReactNode
}

export const Providers = ({children}: ProvidersProps) => (
	<I18nProvider>
		<ThemeProvider>
			<SessionProvider>{children}</SessionProvider>
		</ThemeProvider>
	</I18nProvider>
)
