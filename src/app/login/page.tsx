'use client'


import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import {getLang, t} from '@relocale/i18n'
import {signIn} from 'next-auth/react'
import {useRouter, useSearchParams} from 'next/navigation'
import {useContext} from 'react'
import {I18nContext} from '@/utils/contexts/i18n/I18nProvider'

export default function Login() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'
	const router = useRouter()

	const asd = useContext(I18nContext)

	const signInProvider = (provider: 'github') => {
		signIn(provider, {callbackUrl})
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const email = formData.get('email')
		const password = formData.get('password')

		if (email instanceof File && password instanceof File) {
			alert('Неправильно введены данные!')
			return
		}

		if (!email || !password || !email.toString().length || !password.toString().length) {
			alert('Все поля должны быть заполнены!')
			return
		}

		const response = await signIn('credentials', {email, password, redirect: false})

		if (response && !response.error) {
			alert('Успешная авторизация')
			console.log(response)
			router.push('/')
			return
		}

		console.log(response)
		if (response?.status === 401) {
			alert('Неправильный логин или пароль')
			return
		}
	}

	return (
		<Box sx={{width: '100%', height: '100%', backgroundColor: 'black'}}>
			<Container maxWidth="xl" sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<Box component={'form'} onSubmit={handleSubmit} sx={{minWidth: 300, display: 'grid', gridTemplateColumns: '1fr', gridRowGap: 5, padding: 3, border: 3, borderRadius: 3, borderColor: 'primary.main'}}>
					<Typography variant="h5" component="h2" align='center'>{t(`login.title`)}</Typography>
					<TextField name='email' label={t(`login.label_email`)} variant="standard" sx={{width: '100%'}} />
					<TextField name='password' label={t(`login.label_password`)} variant="standard" type='password' sx={{width: '100%'}} />
					<Box sx={{display: 'grid', gridTemplateColumns: '1fr', gridRowGap: 10, mt: 2}}>
						<Button variant='contained' fullWidth type='submit'>{t(`login.signin`)}</Button>
						<Button variant='outlined' fullWidth onClick={() => signInProvider('github')}>
							<GitHubIcon sx={{mr: 1}} />
							GitHub
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
