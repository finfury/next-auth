import {IRegRequest} from '@/app/models/IReg'
import {users} from '@/utils/contexts/users'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
	const body: IRegRequest = await request.json()
	const cookies = await request.cookies.get('theme')

	const user = users.find(user => user.login === body.login)

	if (user) {
		const response = NextResponse.json(
			{success: false},
			{status: 451, headers: {'content-type': 'application/json'}}
		)

		return response
	}

	const response = NextResponse.json(
		{success: true},
		{status: 200, headers: {'content-type': 'application/json'}}
	)

	response.cookies.set({
		name: 'theme',
		value: 'dark',
		httpOnly: false,
		maxAge: 900
	})

	return response
}
