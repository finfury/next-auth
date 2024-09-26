import {Theme} from '@/utils/contexts/theme/ThemeProvider'

export interface IThemeRequest {
	theme: Theme
}

export interface IThemeResponse {
	success: boolean
	theme: Theme
}
