export type Language = keyof typeof resources
export const lang: Language = 'en'
export const resources: Record<string, Record<string, string>> = {
	en: {
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

export function getDictionary(language: string) {
	if (language in resources) return resources[language]
	return resources['ru']
}
