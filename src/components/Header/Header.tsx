'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TranslateIcon from '@mui/icons-material/Translate'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {getDictionary, Language} from '@/utils/contexts/i18n/I18n'
import {t} from '@relocale/i18n'
import {I18nContext} from '@/utils/contexts/i18n/I18nProvider'
import {changeLanguage} from '@/utils/api/language'
import {changeTheme} from '@/utils/api/theme'
import {Theme, ThemeContext} from '@/utils/contexts/theme/ThemeProvider'
import {signOut, useSession} from 'next-auth/react'

function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
	const { data: session } = useSession();

	const {language, setLanguage} = React.useContext(I18nContext)
	const {theme, setTheme} = React.useContext(ThemeContext)

	const dictionary = getDictionary(language)
	const pages = dictionary.header.pages
	const settings = dictionary.header.settings

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const handleAccountExit = () => {
		signOut()
	}

	const handleChangeTheme = async () => {
		let newTheme: Theme = 'light'
		if (theme === 'dark') newTheme = 'light'
		if (theme === 'light') newTheme = 'dark'

		const response = await changeTheme(newTheme)
		if (!response?.success) return alert('Не полчилось обновить тему на сервере')
		setTheme(newTheme)
	}

	const handleChangeLanguage = async () => {
		let newLang: Language = 'ru'
		if (language === 'ru') newLang = 'en'
		if (language === 'en') newLang = 'ru'

		const response = await changeLanguage(newLang)
		if (!response?.success) return alert('Не полчилось обновить язык на сервере')
		setLanguage(newLang)
	}

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Avatar
						alt='logo'
						src='/images/favicon.ico'
						sx={{display: {xs: 'none', md: 'flex'}}}
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							ml: 2,
							fontWeight: 400,
							color: 'inherit',
							display: {xs: 'none', md: 'flex'}
						}}>
						{t(`header.logo_text`)}
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{display: {xs: 'block', md: 'none'}}}>
							{Object.keys(pages).map(page => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography sx={{textAlign: 'center', fontWeight: 400}}>
										{t(`header.pages.${page}`)}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: {xs: 'none', md: 'flex', justifyContent: 'center'}
						}}>
						{Object.keys(pages).map(page => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									mx: 3,
									color: 'white',
									display: 'block',
									fontWeight: 400,
									fontSize: 16
								}}>
								{t(`header.pages.${page}`)}
							</Button>
						))}
					</Box>
					<Box sx={{flexGrow: 0}}>
						<IconButton onClick={handleChangeTheme} size='large'>
							{theme === 'light' && (
								<DarkModeIcon sx={{width: 30, height: 30, color: 'white'}} />
							)}
							{theme === 'dark' && (
								<LightModeIcon sx={{width: 30, height: 30, color: 'white'}} />
							)}
						</IconButton>
						<IconButton onClick={handleChangeLanguage} size='large'>
							<TranslateIcon sx={{width: 30, height: 30, color: 'white'}} />
						</IconButton>
						<Tooltip title='Действия с аккаунтом'>
							<IconButton onClick={handleOpenUserMenu} size='large'>
								{session?.user?.image && <Avatar alt="logo" src={session.user.image} sx={{display: {xs: 'none', md: 'flex'}}} />}
								{!session?.user?.image && <AccountCircleIcon sx={{width: 40, height: 40, color: 'white'}} />}
							</IconButton>
						</Tooltip>
						<Menu
							sx={{mt: '45px'}}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{Object.keys(settings).map(setting => {
								return <MenuItem key={setting} onClick={setting === 'account_action_2' ? handleAccountExit : handleCloseUserMenu}>
									<Typography sx={{textAlign: 'center'}}>
										{t(`header.settings.${setting}`)}
									</Typography>
								</MenuItem>
							})}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Header
