import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export const config = {
	// Указание путей для срабатывания мидлварины
	matcher: ['/', '/api/theme/']
}

export function middleware(request: NextRequest) {
	const regExp = /\/?theme\/?$/ // api/theme/
	if (regExp.test(request.url)) {
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
