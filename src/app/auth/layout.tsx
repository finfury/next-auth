import React from 'react'
import styles from './page.module.scss'
import {LanguageSwitcher} from '@/components/LanguageSwitcher/LanguageSwitcher'
import {ThemeSwitcher} from '@/components/ThemeSwitcher/ThemeSwitcher'

interface IProps {
	children: React.ReactNode
}

export default function AuthorizationLayout({children}: IProps) {
	return (
		<div className={styles.authorization}>
			<LanguageSwitcher />
			<ThemeSwitcher />
			<div className={styles.authorization__body}>{children}</div>
		</div>
	)
}
