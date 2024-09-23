import Image from 'next/image'
import Img from '@/images/next.svg'

export default function Home() {
	return (
		<div>
			<h1>Home page</h1>
			<svg>
				<use href={`/images/sprite.svg#icon-telegram`} />
			</svg>
		</div>
	)
}
