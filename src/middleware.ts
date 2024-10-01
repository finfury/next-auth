import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
export const config = {
	// Указание путей для срабатывания мидлварины
	matcher: ['/profile', '/api/theme/']
}

export function middleware(request: NextRequest) {
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
