import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {resources} from './utils/contexts/i18n/I18n'
//export {default} from 'next-auth/middleware'

export const config = {
	// Указание путей для срабатывания мидлварины
	//matcher: ['/profile', '/api/theme/', '/(ru|en)/:path*']
	matcher: ['/']
}

export function middleware(request: NextRequest) {
	console.log('Middlewarina')

	const regExpLang = /\/?\/?$/ // "/"
	if (regExpLang.test(request.url)) {
		const cookieName = 'lang'
		const response = NextResponse.next()
		const currentLanguage = request.cookies.get(cookieName)

		// Язык уже был выбран
		if (currentLanguage) return response

		// Получаем предпочитаемый язык
		const preferredLanguages = request.headers.get('accept-language')
		const language = preferredLanguages?.split(',')[0]?.trim().toLowerCase().split('-')[0] ?? 'ru'
		
		// Cохраняем в куки
		response.cookies.set({
			name: cookieName,
			value: language,
			httpOnly: false
		})

		return response
	}

	const regExpTheme = /\/?theme\/?$/ // theme/

	if (regExpTheme.test(request.url)) {
		const themeCookieName = 'theme'
		const response = NextResponse.next()
		const cookie = request.cookies.get(themeCookieName)

		if (!cookie || cookie.name !== themeCookieName || !cookie.value) {
			response.cookies.set({
				name: themeCookieName,
				value: 'light'
			})
		} else {
			const theme = request.headers.get(themeCookieName)
			if (theme && theme !== cookie.value) {
				response.cookies.set({
					name: themeCookieName,
					value: theme
				})
			}
		}

		return response
	}
}
