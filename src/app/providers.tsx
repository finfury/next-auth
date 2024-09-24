'use client'

import { I18nProvider, I18nProviderProps } from '@/utils/contexts/i18n/I18nProvider'

interface ProvidersProps {
	children: React.ReactNode
	i18n: Omit<I18nProviderProps, 'children'>
}

export const Providers = ({ children, i18n }: ProvidersProps) => (
	<I18nProvider {...i18n}>{children}</I18nProvider>
)