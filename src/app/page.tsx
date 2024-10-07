import {getLang, t} from '@relocale/i18n'
import {Comp} from './comp'
import {useContext} from 'react'
import {I18nContext} from '@/utils/contexts/i18n/I18nProvider'


export default function Home() {
	console.log(getLang())

	return (
		<div>
			<h2>{t('hi')}</h2>
			<Comp/>
		</div>
	)
}
