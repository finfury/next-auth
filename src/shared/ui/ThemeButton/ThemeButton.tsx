'use client'

import Button from '@mui/material/Button/Button'
import Icon from '../Icon/Icon'
import styles from './ThemeButton.module.scss'

export function ThemeButton() {
	const handleClick = async () => {}

	return (
		<Button className={styles.theme} onClick={handleClick}>
			Темная тема
			<Icon id='sun' className={styles.icon} />
		</Button>
	)
}
