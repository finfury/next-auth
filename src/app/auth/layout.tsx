import React from 'react'
import styles from './page.module.scss'

interface IProps {
	children: React.ReactNode
}

export default function AuthorizationLayout({ children }: IProps) {
	return <div className={styles.authorization}>
		<div className={styles.authorization__body}>
			{children}
		</div>
	</div>
}