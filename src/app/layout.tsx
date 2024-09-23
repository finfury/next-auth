import styles from './app.module.scss'
import '@/styles/common.scss'

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang='ru'>
			<head>
				<title>Next App</title>
				<link rel='icon' href={'/public/favicon'} type={'favicon'} />
			</head>
			<body>{children}</body>
		</html>
	)
}
