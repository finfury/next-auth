import NextAuth, {AuthOptions} from 'next-auth'

export const authOptions = {
	// Configure one or more authentication providers
	providers: [],
	basePath: '/api/auth'
}

export const {handlers, user} = NextAuth(authOptions)

/* import NextAuth, { AuthOptions } from "next-auth"
import { JWT } from 'next-auth/jwt'

export const authOptions: AuthOptions = {
	providers: [],
	callbacks: {
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			return session
		},
		async signIn(props) {
			return true
		},
		async jwt(props) {
			return props as JWT
		},
	},
	pages: {
		signIn: '/auth/login',
		signOut: '/auth/reg',
	},
	/* callbacks: {
		session({ session, token, user }) {
			return session
		},
	}, 
}

export default NextAuth(authOptions) */
