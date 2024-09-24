'use client'


import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './page.module.scss'
import Button from '@mui/material/Button/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { Auth } from '@/utils/api/instance'
import { IRegRequest, IRegResponse } from '@/app/models/IReg'
import { useRouter } from 'next/navigation'
import { getTheme } from '@/utils/theme'
import { Theme } from '@/app/models/Theme'



export default function Registration() {
	const theme = getTheme()
	const [showPassword, setShowPassword] = React.useState<boolean>(false)
	const router = useRouter()

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const login = formData.get("login")
		const password = formData.get("password")

		if (login instanceof File && password instanceof File) {
			alert('Неправильно введены данные!')
			return
		}
		const bodyRequest: IRegRequest = { login: String(login), password: String(password) }

		const response = await Auth.post<IRegResponse>('reg', bodyRequest)

		if (response.success) {
			//router.push('/main')
			console.log(response)
			console.log(document.cookie)
			alert("Success")
		} else {
			alert("Не получилось зарегистрировать пользователя")
		}
	}

	return (
		<form className={styles.registration} onSubmit={handleSubmit}>
			<ThemeProvider theme={createTheme({ colorSchemes: { dark: theme === 'dark', light: theme === 'light' } })}>
				<Typography variant='h4' component='h2' className={styles.title}>
					Регистрация
				</Typography>

				<div className={styles.form}>
					<TextField
						label='Логин'
						variant='standard'
						name='login'
						slotProps={{
							input: { startAdornment: <Icon className={styles.startIcon} id='person' /> }
						}}
					/>
					<TextField
						label='Пароль'
						variant='standard'
						name='password'
						type={showPassword ? 'text' : 'password'}
						slotProps={{
							input: {
								startAdornment: (
									<Icon
										className={clsx(styles.startIcon, styles.password)}
										id='eye'
										onClick={handleClickShowPassword}
									/>
								)
							}
						}}
					/>
				</div>

				<div className={styles.actions}>
					<Button className={styles.actionButton} type='submit' variant='contained' fullWidth={true}>
						Зарегистрироваться
					</Button>
				</div>

				<div className={styles.note}>
					<Link href='/auth/login' className={styles.note__text}>
						Уже есть аккаунт? <span className={styles.note__text_link}>Войти!</span>
					</Link>
				</div>
			</ThemeProvider>
		</form>
	)
}
