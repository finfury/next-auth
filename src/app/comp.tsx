'use client'


import {changeLang, getLang, t} from '@relocale/i18n'
import Button from '@mui/material/Button/Button'
import {useContext} from 'react'
import {ThemeContext} from '@/utils/contexts/theme/ThemeProvider'
import {I18nContext} from '@/utils/contexts/i18n/I18nProvider'


export function Comp() {
	const context = useContext(I18nContext)
	console.log(context)
	const {setTheme} = useContext(ThemeContext)
	const {setLanguage} = useContext(I18nContext)

	const setEnglish = async () => {
		changeLang('en')
		setLanguage('en')
		const res = await fetch('http://localhost:3000/api/language', {
			method: 'POST',
			body: JSON.stringify({language: 'en'}) 
		})
		console.log(await res.json())
		console.log(getLang())
	}

	const setRussain = async () => {
		setLanguage('ru')
		changeLang('ru')
	}
	
	return <div>
		{t('hi')}
		<Button variant="text" onClick={() => setEnglish()}>English</Button>
		<Button variant="text" onClick={() => setRussain()}>Russian</Button>
		<Button variant="contained" onClick={() => setTheme('dark')}>Contained</Button>
		<Button variant="outlined" onClick={() => setTheme('light')}>Outlined</Button>
	</div>
}