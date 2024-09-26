'use client'

import {useState} from 'react'
import {Providers} from './providers'
import {getMessagesByLocale} from '@/utils/contexts/i18n/helpers/getMessagesByLocale'
import {Theme} from '@/utils/contexts/theme/ThemeProvider'
import {Locale} from '@/utils/contexts/i18n/I18nProvider'
import '@/styles/common.scss'

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	const [locale, setLocale] = useState<Locale>('ru')
	const [theme, setTheme] = useState<Theme>('light')
	const messages = getMessagesByLocale(locale)

	return (
		<html lang='ru'>
			<head>
				<title>Next App</title>
				<link rel='icon' href={'/images/favicon.ico'} type={'favicon'} />
			</head>
			<body data-theme={theme}>
				<Providers i18n={{locale, messages, setLocale}} theme={{theme, setTheme}}>
					{children}
				</Providers>
			</body>
		</html>
	)
}
