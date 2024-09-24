'use client'

import React from 'react'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './page.module.scss'
import Button from '@mui/material/Button/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { Auth } from '@/utils/api/instance'
import { IRegRequest, IRegResponse } from '@/app/models/IReg'
import { FormattedMessage } from 'react-intl'
import { getI18n } from '@/utils/contexts/i18n/helpers/getI18n'

export default function Registration() {
	const i18n = getI18n('ru')
	const [showPassword, setShowPassword] = React.useState<boolean>(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const login = formData.get('login')
		const password = formData.get('password')

		if (login instanceof File && password instanceof File) {
			alert('Неправильно введены данные!')
			return
		}
		const bodyRequest: IRegRequest = { login: String(login), password: String(password) }

		const response = await Auth.post<IRegResponse>('reg', bodyRequest)

		if (response.success) {
			console.log(response)
			console.log(document.cookie)
			alert('Success')
		} else {
			alert('Не получилось зарегистрировать пользователя')
		}
	}

	return (
		<form className={styles.registration} onSubmit={handleSubmit}>
			<Typography variant='h4' component='h2' className={styles.title}>
				<FormattedMessage id='reg_title' ignoreTag={true} />
			</Typography>

			<div className={styles.form}>
				<TextField
					label={i18n.formatMessage({ id: 'input_login_label' })}
					variant='standard'
					name='login'
					slotProps={{
						input: {
							startAdornment: <Icon className={styles.startIcon} id='person' />
						}
					}}
				/>
				<TextField
					label={i18n.formatMessage({ id: 'input_password_label' })}
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
				<Button
					className={styles.actionButton}
					type='submit'
					variant='contained'
					fullWidth={true}>
					<FormattedMessage id='reg_action_registration' ignoreTag={true} />
				</Button>
			</div>

			<div className={styles.note}>
				<Link href='/auth/login' className={styles.note__text}>
					<FormattedMessage id='reg_note' ignoreTag={true} />
					<span className={styles.note__text_link}>
						<FormattedMessage id='reg_note' ignoreTag={true} />
					</span>
				</Link>
			</div>
		</form>
	)
}
