import { users } from '@/utils/contexts/users'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID ?? '',
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
		}),
		Credentials({
			credentials: {
				id: { label: 'id', type: 'id', required: false },
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			// @ts-ignore
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null

				const currentUser = users.find(user => user.email === credentials.email)

				if (currentUser && currentUser.password === credentials.password) {
					const { password, ...userWithoutPass } = currentUser

					console.log('userWithoutPass', userWithoutPass)
					return userWithoutPass
				}

				return null
			},
		}),
	],
	pages: {
		signIn: '/auth/reg'
	}
})

export { handler as GET, handler as POST }
