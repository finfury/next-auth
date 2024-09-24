export interface IRegResponse {
	success: boolean
}

export interface IRegRequest {
	login: string | undefined | null
	password: string | undefined | null
}