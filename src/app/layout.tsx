'use client'

import { Providers } from './providers'
import { getMessagesByLocale } from '@/utils/contexts/i18n/helpers/getMessagesByLocale'
import { Theme } from '@/utils/contexts/theme/ThemeProvider'
import '@/styles/common.scss'
import styles from './app.module.scss'
import { Locale } from '@/utils/contexts/i18n/I18nProvider'
import { useState } from 'react'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const [locale, setLocale] = useState<Locale>('ru')
	const messages = getMessagesByLocale(locale)
	const isDarkTheme = false
	const theme: Theme = isDarkTheme ? 'dark' : 'light'
	//const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

	return (
		<html lang='ru'>
			<head>
				<title>Next App</title>
				<link rel='icon' href={'/images/favicon.ico'} type={'favicon'} />
			</head>
			<body>
				<Providers i18n={{ locale, messages, setLocale }} theme={{theme}}>{children}</Providers>
			</body>
		</html>
	)
}
