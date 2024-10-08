import {Language} from '../contexts/i18n/I18n'

interface IRequest {
	language: string
}

interface IResponse {
	success: boolean
	language: string
}

export async function changeLanguage(language: Language): Promise<IResponse | undefined> {
	const body: IRequest = {
		language: language
	}

	const res = await fetch('http://localhost:3000/api/language', {
		method: 'POST',
		body: JSON.stringify(body)
	})

	return await res.json()
}
