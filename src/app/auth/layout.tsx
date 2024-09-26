import React from 'react'
import styles from './page.module.scss'
import {LanguageButton} from '@/shared/ui/LanguageButton/LanguageButton'

interface IProps {
	children: React.ReactNode
}

export default function AuthorizationLayout({children}: IProps) {
	return (
		<div className={styles.authorization}>
			<LanguageButton />
			<div className={styles.authorization__body}>{children}</div>
		</div>
	)
}
