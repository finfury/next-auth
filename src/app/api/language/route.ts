import {NextRequest, NextResponse} from 'next/server'

interface IRequest {
	language: string
}

interface IResponse {
	success: boolean
	language: string
}

export async function POST(request: NextRequest): Promise<NextResponse<IResponse>> {
	const {language}: IRequest = await request.json()

	const body: IResponse = {
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
