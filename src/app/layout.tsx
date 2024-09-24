'use client'


import { Providers } from './providers'
import { getMessagesByLocale, Locale } from '@/utils/contexts/i18n/helpers/getMessagesByLocale'
import '@/styles/common.scss'
import styles from './app.module.scss'


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const messages = getMessagesByLocale('ru')

	return (
		<html lang='ru'>
			<head>
				<title>Next App</title>
				<link rel='icon' href={'/public/favicon'} type={'favicon'} />
			</head>
			<body>
				<Providers i18n={{ locale: 'ru', messages }}>
					{children}
				</Providers>
			</body>
		</html>
	)
}
