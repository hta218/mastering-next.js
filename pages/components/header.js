import Link from 'next/link'

const Header = () => {
	return <>
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link as="/post/1" href="/post/[id]">
			<a>First post</a>
		</Link>
		<Link as="/post/2" href="/post/[id]">
			<a>Second post</a>
		</Link>
	</>
}

export default Header
