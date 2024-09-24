import {Theme} from '@/app/models/Theme'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
	const {theme}: {theme: Theme} = await request.json()

	const response = NextResponse.json(
		{success: true},
		{status: 200, headers: {'content-type': 'application/json'}}
	)

	response.cookies.set({
		name: 'theme',
		value: theme,
		httpOnly: false
	})

	return response
}
