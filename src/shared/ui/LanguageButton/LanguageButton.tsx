'use client'

import Button from '@mui/material/Button/Button'
import Icon from '../Icon/Icon'
import styles from './LanguageButton.module.scss'
import { useContext } from 'react'
import { I18nContext } from '@/utils/contexts/i18n/I18nProvider'
import { FormattedMessage } from 'react-intl'

export function LanguageButton() {
	const { locale, setLocale } = useContext(I18nContext)

	const handleClick = async () => {
		switch (locale) {
			case 'ru':
				setLocale('en')
				break
			case 'en':
				setLocale('ru')
				break
			default:
				setLocale('ru')
				break
		}
	}

	return (
		<Button className={styles.laguage} onClick={handleClick}>
			<FormattedMessage id='button_locale_switch' ignoreTag={true} />
			<Icon id='location' className={styles.icon} />
		</Button>
	)
}
