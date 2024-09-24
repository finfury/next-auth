'use client'

import Button from '@mui/material/Button/Button'
import Icon from '../Icon/Icon'
import styles from './LanguageButton.module.scss'

export function LanguageButton() {
	const handleClick = async () => {
	}

	return (
		<Button className={styles.laguage} onClick={handleClick}>
			English
			<Icon id='sun' className={styles.icon} />
		</Button>
	)
}
