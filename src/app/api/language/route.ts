import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
	const {language}: {language: string} = await request.json()

	const body = {
		success: true,
		language
	}

	const response = NextResponse.json(body, {
		status: 200,
		headers: {'content-type': 'application/json'}
	})

	response.cookies.set({
		name: 'lang',
		value: language,
		httpOnly: false
	})

	return response
}
