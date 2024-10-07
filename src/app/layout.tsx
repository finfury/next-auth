import {changeLang, getLang, init} from '@relocale/i18n'
import {Providers} from './providers'
import {cookies} from 'next/headers'
import {onMissingKey, resources} from '@/utils/contexts/i18n/I18n'
import '@/styles/common.css'

init({lang: 'ru', resources, onMissingKey})

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	const lang = getLang() ?? 'ru'

	const allCookies = cookies()
	const cookieLang = allCookies.get('lang')?.value ?? 'ru'

	if (lang !== cookieLang) {
		console.log('Not equal lang')
		changeLang(cookieLang)
	}

	return (
		<html lang={lang}>
			<head>
				<title>Next App</title>
				<link rel='icon' href={'/images/favicon.ico'} type={'favicon'} />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
