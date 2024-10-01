'use client'

import React, {useContext} from 'react'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import Icon from '@/components/Icon/Icon'
import styles from './page.module.scss'
import Button from '@mui/material/Button/Button'
import clsx from 'clsx'
import Link from 'next/link'
import {FormattedMessage} from 'react-intl'
import {getI18n} from '@/utils/contexts/i18n/helpers/getI18n'
import {I18nContext} from '@/utils/contexts/i18n/I18nProvider'
import {ThemeContext} from '@/utils/contexts/theme/ThemeProvider'
import AuthButton from '@/components/AuthButton/AuthButton'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'

export default function Login() {
	const {locale} = useContext(I18nContext)
	const {theme} = useContext(ThemeContext)
	const i18n = getI18n(locale)
	const [showPassword, setShowPassword] = React.useState<boolean>(false)
	const router = useRouter()

	const handleClickShowPassword = () => setShowPassword(show => !show)

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
		} else {
			alert('Что-то пошло не так')
			console.log(response)
		}
	}

	return (
		<form className={styles.registration} onSubmit={handleSubmit}>
			<Typography variant='h4' component='h2' className={styles.title}>
				<FormattedMessage id='login_title' ignoreTag={true} />
			</Typography>

			<div className={styles.form}>
				<TextField
					label={i18n.formatMessage({id: 'input_login_label'})}
					variant='standard'
					name='email'
					slotProps={{
						input: {
							startAdornment: (
								<Icon
									className={clsx(styles.startIcon, styles[theme])}
									id='person'
								/>
							)
						}
					}}
				/>
				<TextField
					label={i18n.formatMessage({id: 'input_password_label'})}
					variant='standard'
					name='password'
					type={showPassword ? 'text' : 'password'}
					slotProps={{
						input: {
							startAdornment: (
								<Icon
									className={clsx(
										styles.startIcon,
										styles.password,
										styles[theme]
									)}
									id='eye'
									onClick={handleClickShowPassword}
								/>
							)
						}
					}}
				/>
			</div>

			<div className={styles.actions}>
				<Button className={styles.actionButton} type='submit' variant='contained'>
					<FormattedMessage id='login_action_signin' ignoreTag={true} />
				</Button>
				<AuthButton
					provider={'github'}
					className={styles.actionButton}
					type='Button'
					variant='contained'>
					GitHub
				</AuthButton>
			</div>

			<div className={styles.note}>
				<Link href='/auth/login' className={styles.note__text}>
					<FormattedMessage id='login_note' ignoreTag={true} />
					<span className={styles.note__text_link}>
						<FormattedMessage id='login_note_link' ignoreTag={true} />
					</span>
				</Link>
			</div>
		</form>
	)
}
