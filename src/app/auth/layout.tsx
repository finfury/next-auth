import React from 'react'
import styles from './page.module.scss'
import { ThemeButton } from '@/shared/ui/ThemeButton/ThemeButton'

interface IProps {
	children: React.ReactNode
}

export default function AuthorizationLayout({ children }: IProps) {
	return (
		<div className={styles.authorization}>
			<ThemeButton />
			<div className={styles.authorization__body}>{children}</div>
		</div>
	)
}
