'use client'


import React from 'react'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Icon from '@/shared/ui/Icon/Icon'
import styles from './page.module.scss'
import Button from '@mui/material/Button/Button'
import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput'
import IconButton from '@mui/material/IconButton/IconButton'
import clsx from 'clsx'

export default function Registration() {
	const [showPassword, setShowPassword] = React.useState<boolean>(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)


	return <div className={styles.registration}>
		<Typography variant='h4' component='h2' className={styles.title}>Регистрация</Typography>

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
			<Typography variant='body2' component='a' href='asou8h' className={styles.note__text}>
				Уже есть аккаунт? <span className={styles.note__text_link}>Войти!</span>
			</Typography>
		</div>
	</div>
}