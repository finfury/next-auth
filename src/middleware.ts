import {NextResponse} from 'next/server'
import {NextRequestWithAuth, withAuth} from 'next-auth/middleware'

export const config = {
	// Указание путей для срабатывания мидлварины
	matcher: ['/']
}

export default function middleware(request: NextRequestWithAuth) {
	console.log('Middlewarina common')

	return withAuth(request, {
		callbacks: {
			/* Проверка авторизации */
			authorized: ({token, req}) => {
				if (token) return true
				return false
			},
		},
		/* Настройка редиректов */
		pages: {
			signIn: '/login'
		}
	})
}