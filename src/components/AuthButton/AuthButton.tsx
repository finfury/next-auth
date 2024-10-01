'use client'

import {Button, ButtonTypeMap, ExtendButtonBase} from '@mui/material'
import {BuiltInProviderType} from 'next-auth/providers/index'
import {LiteralUnion, signIn, SignInOptions} from 'next-auth/react'
import {useSearchParams} from 'next/navigation'

interface IProps extends ExtendButtonBase<ButtonTypeMap<{}, 'button'>> {
	provider: LiteralUnion<BuiltInProviderType>
	options?: SignInOptions
	children: any
}

export default function AuthButton({provider, options, children, ...props}: IProps) {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'

	return (
		<Button onClick={() => signIn(provider, options ?? {callbackUrl})} {...props}>
			{children}
		</Button>
	)
}
