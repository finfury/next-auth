'use client'

import {useSession} from 'next-auth/react'
import Link from 'next/link'

export default function Profile() {
	const {data: session} = useSession()

	if (session) {
		return (
			<div>
				<h2>Protected Page</h2>
				<p>You can view this page because you are signed in.</p>
			</div>
		)
	}
	return (
		<div>
			<p>Access Denied</p>
			<Link href={'/'}>Вернуться на главную</Link>
		</div>
	)
}
