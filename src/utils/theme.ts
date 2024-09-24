import { Theme } from '@/app/models/Theme'


export function getCookie(name: string): string | undefined {
	let cookie = document.cookie.split('; ').find(row => row.startsWith(name + '='))
	return cookie ? cookie.split('=')[1] : undefined
}

export function checkIsTheme<T>(theme: string): theme is Theme {
	if (theme === 'dark' || theme === 'light') return true
	return false
}

export function getTheme(): Theme {
	const cookieTheme = getCookie('theme')
	let currentTheme: Theme | undefined = undefined

	if (!cookieTheme) {
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

		if (isDarkMode) {
			currentTheme = 'dark'
		}
	} else {
		if (!checkIsTheme(cookieTheme)) currentTheme = 'light'
		else currentTheme = cookieTheme
	}

	return currentTheme ?? 'light'
}

export function getNewTheme(theme: Theme): Theme {
	if (theme === 'dark') return 'light'
	if (theme === 'light') return 'dark'
	return 'light'
}