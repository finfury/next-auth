'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
import LogoImg from '@/images/next.svg'
import Button from '@mui/material/Button'
import styles from './Header.module.scss'
import Typography from '@mui/material/Typography/Typography'

const Header = () => {
	const [activeMenu, setActiveMenu] = useState<boolean>(false)

	return (
		<>
			<header className={styles.header}>
				<div className={'container'}>
					<div className={styles.headerBody}>
						<a href='' className={styles.headerLogo}>
							<Image src={LogoImg}
								className={styles.headerLogoImg}
								alt={''} />
						</a>
						<nav className={clsx(styles.navigation, activeMenu && styles.active)}>
							<ul className={styles.navigation__list}>
								<li className={styles.navigation__item}>
									<Typography component={'a'}
										variant='h6'
										href='dddd'
										className={styles.navigation__link}
										onClick={() => setActiveMenu(false)}>
										Главная
									</Typography >
								</li>
								<li className={styles.navigation__item}>
									<Typography component={'a'}
										variant='h6'
										href='dddd'
										className={styles.navigation__link}
										onClick={() => setActiveMenu(false)}>
										Запасная
									</Typography >
								</li>
								<li className={styles.navigation__item}>
									<Typography component={'a'}
										variant='h6'
										href='/auth/reg'
										className={styles.navigation__link}
										onClick={() => setActiveMenu(false)}>
										Авторизация
									</Typography >
								</li>
							</ul>
							<Button variant={'contained'} size={'large'} className={styles.headerButton}>Связаться с нами</Button>
						</nav>
						<div onClick={() => setActiveMenu(!activeMenu)}
							className={clsx(styles.headerBurger, activeMenu && styles.active)}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header