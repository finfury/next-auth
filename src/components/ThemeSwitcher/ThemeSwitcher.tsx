'use client'

import clsx from 'clsx'
import {useContext} from 'react'
import {Theme, ThemeContext} from '@/utils/contexts/theme/ThemeProvider'
import {ThemeApi} from '@/utils/api/instance'
import Button from '@mui/material/Button/Button'
import Icon from '../Icon/Icon'
import styles from './ThemeSwitcher.module.scss'
import {IThemeRequest, IThemeResponse} from '@/app/models/Theme'

export function ThemeSwitcher() {
	const {theme, setTheme} = useContext(ThemeContext)

	const handleClick = async () => {
		let newTheme: Theme
		switch (theme) {
			case 'dark':
				newTheme = 'light'
				break
			case 'light':
				newTheme = 'dark'
				break
			default:
				newTheme = 'light'
				break
		}

		setTheme(newTheme)
		const body: IThemeRequest = {theme: newTheme}
		const response = await ThemeApi.post<IThemeResponse>('theme', body, {
			headers: {
				theme: newTheme
			}
		})

		if (response.success) {
			console.log('тема установлена ' + response.theme)
		} else {
			console.log('Не удалось установить тему ' + response.theme)
		}
	}

	return (
		<Button className={styles.theme} onClick={handleClick}>
			{theme === 'light' && <Icon id='sun' className={clsx(styles.icon, styles[theme])} />}
			{theme === 'dark' && <Icon id='moon' className={clsx(styles.icon, styles[theme])} />}
		</Button>
	)
}
