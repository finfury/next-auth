import {Language} from '../contexts/i18n/I18n'
import {Theme} from '../contexts/theme/ThemeProvider'

interface IRequest {
	theme: Theme
}

interface IResponse {
	success: boolean
	theme: Theme
}

export async function changeTheme(theme: Theme): Promise<IResponse | undefined> {
	const body: IRequest = {
		theme: theme
	}

	const res = await fetch('http://localhost:3000/api/theme', {
		method: 'POST',
		body: JSON.stringify(body)
	})

	return await res.json()
}
