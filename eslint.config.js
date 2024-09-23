import {eslint} from '@siberiacancode/eslint'

export default eslint(
	{
		typescript: true,
		jsx: true,
		jsxA11y: true,
		react: true
	},
	{
		extends: 'next/core-web-vitals'
	}
)
