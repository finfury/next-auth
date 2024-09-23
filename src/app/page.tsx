import Image from 'next/image'
import Img from '@/images/favicon.ico'


export default function Home() {
	return (
		<div>
			<h1>Home page</h1>
			<Image src={Img} alt='' />
		</div>
	)
}
