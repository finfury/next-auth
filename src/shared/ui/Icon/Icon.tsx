import {ComponentPropsWithRef} from 'react'
import clsx from 'clsx'
import styles from './Icon.module.scss'

interface IProps extends ComponentPropsWithRef<'svg'> {
	id:
		| 'mail'
		| 'arrow'
		| 'book'
		| 'grade'
		| 'location'
		| 'person'
		| 'phone'
		| 'check'
		| 'telegram'
		| 'whatsApp'
		| 'vk'
		| 'viber'
		| 'eye'
	link?: string
	linkClassName?: string
}

function Icon({id, className, link, linkClassName, ...props}: IProps) {
	const path = '/images/sprite.svg#icon-'
	if (link) {
		return (
			<a href={link} className={clsx(linkClassName, styles.link)}>
				<svg className={clsx(styles.base, className, styles[id])} {...props}>
					<use href={path + id}></use>
				</svg>
			</a>
		)
	}

	return (
		<svg className={clsx(styles.base, className, styles[id])} {...props}>
			<use href={path + id}></use>
		</svg>
	)
}

export default Icon
