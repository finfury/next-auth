import React from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './page.module.scss'

export default function Login() {
	const [showPassword, setShowPassword] = React.useState<boolean>(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)


	return <div className={styles.login}>
		<Typography variant='h4' component='h2' className={styles.title}>Войти в аккаунт</Typography>

		<form className={styles.form}>
			<TextField label="Логин" variant="standard" slotProps={{
				input: { startAdornment: <Icon className={styles.startIcon} id='person' /> }
			}} />
			<TextField label="Пароль" variant="standard" type={showPassword ? "text" : "password"} slotProps={{
				input: { startAdornment: <Icon className={clsx(styles.startIcon, styles.password)} id='eye' onClick={handleClickShowPassword} /> }
			}} />
		</form>

		<div className={styles.actions}>
			<Button className={styles.actionButton} variant='contained' fullWidth={false}>Зарегистрироваться</Button>
		</div>

		<div className={styles.note}>
			<Link href={'adsasdasd'} className={styles.note__text}>
				Уже есть аккаунт? <span className={styles.note__text_link}>Войти!</span>
			</Link>
		</div>
	</div>
}