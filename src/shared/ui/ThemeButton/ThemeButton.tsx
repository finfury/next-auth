'use client'

import Button from '@mui/material/Button/Button'
import Icon from '../Icon/Icon'
import styles from './ThemeButton.module.scss'
import { ThemeApi } from '@/utils/api/instance'
import { IThemeResponse } from '@/app/models/Theme'
import { getNewTheme, getTheme } from '@/utils/theme'


export function ThemeButton() {
	const handleClick = async () => {
		const currentTheme = getTheme()
		const theme = getNewTheme(currentTheme)
		const result = await ThemeApi.post<IThemeResponse>('theme', { theme })

		if (!result.success) {
			alert('Не получилось изменить тему на стороне сервера. Возможны проблемы с сохранением данных в cookie')
			return
		}

		document.body.setAttribute('data-theme', theme)
		console.log('Обновление на ' + theme)
	}

	return <Button className={styles.theme} onClick={handleClick}>
		Темная тема
		<Icon id='sun' className={styles.icon} />
	</Button>
}