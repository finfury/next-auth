import {getLang} from '@relocale/i18n'
import {Providers} from './providers'
import '@/styles/common.css'

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	const lang = getLang() ?? 'ru'

	return (
		<html lang={lang}>
			<head>
				<title>Next Auth</title>
				<link rel='icon' href={'/images/favicon.ico'} type={'favicon'} />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
