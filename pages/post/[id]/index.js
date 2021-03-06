import { useRouter } from 'next/router'
import Header from '../../components/header'

const Post = ({ title, body }) => {
	const router = useRouter()
	const { id } = router.query
	return (
		<div>
			<Header />
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	)
}

Post.getInitialProps = async ({ query }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
	const post = res.json()
	return post
}

export default Post
