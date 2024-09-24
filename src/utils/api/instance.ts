import {HttpClient} from './http-client'

export const Auth = new HttpClient({
	baseURL: 'http://localhost:3000/api'
})
