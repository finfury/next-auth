import {NextRequest, NextResponse} from 'next/server'

interface IRequest {
	theme: string
}

interface IResponse {
	success: boolean
	theme: string
}

export async function POST(request: NextRequest) {
	const {theme}: IRequest = await request.json()

	const body: IResponse = {
		success: true,
		theme
	}

	const response = NextResponse.json(body, {
		status: 200,
		headers: {'content-type': 'application/json'}
	})

	response.cookies.set({
		name: 'theme',
		value: theme,
		httpOnly: false
	})

	return response
}
