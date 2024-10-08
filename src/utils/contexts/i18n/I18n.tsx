export type Language = keyof typeof resources

export const resources = {
	en: {
		header: {
			logo_text: 'Main',
			pages: {
				section_1: 'Products',
				section_2: 'Price',
				section_3: 'Contacts'
			},
			settings: {
				account_action_2: 'Exit'
			}
		},
		login: {
			title: 'Sign in in the account',
			label_email: 'Email',
			label_password: 'Password',
			signin: 'Sign In',
		},
		hi: 'Hi, me',
		title: 'Title',
		reg_title: 'Rigistration',
		reg_action_registration: 'Register',
		reg_note: 'Already have an account? ',
		reg_note_link: 'Log in!',
		input_login_label: 'Login',
		input_password_label: 'Password',
		login_title: 'Sign In',
		login_action_signin: 'Sign in',
		login_note: 'still no account?',
		login_note_link: ' Create one!',
		button_locale_switch: 'Русский'
	},
	ru: {
		header: {
			logo_text: 'Главная',
			pages: {
				section_1: 'Продукты',
				section_2: 'Цены',
				section_3: 'Контакты'
			},
			settings: {
				account_action_2: 'Выйти'
			}
		},
		login: {
			title: 'Войти в аккаунт',
			label_email: 'Почта',
			label_password: 'Пароль',
			signin: 'Войти',
		},
		hi: 'Привет, Me',
		title: 'Заголовок',
		reg_title: 'Регистрация',
		reg_action_registration: 'Зарегистрироваться',
		reg_note: 'Уже есть аккаунт? ',
		reg_note_link: 'Войти!',
		login_title: 'Войти в аккаунт',
		login_action_signin: 'Войти',
		login_note: 'Еще нет аккаунта? ',
		login_note_link: 'Создать!',
		input_login_label: 'Логин',
		input_password_label: 'Пароль',
		button_locale_switch: 'English'
	}
}

export const onMissingKey = (missingKey: string | TemplateStringsArray) => {
	console.log(`Not found a key for i18n: ${missingKey}`)
}

export function getDictionary(language: Language) {
	if (language in resources) return resources[language]
	return resources['ru']
}
