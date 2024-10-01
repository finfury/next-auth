import {IThemeRequest, IThemeResponse} from '@/app/models/Theme'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
	const {theme}: IThemeRequest = await request.json()

	const body: IThemeResponse = {
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
		httpOnly: true
	})

	return response
}
