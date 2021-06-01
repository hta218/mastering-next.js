import styles from '../styles/Home.module.css'
import Header from './components/header'

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<h1 className={styles.title}>
				Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>
		</div>
	)
}
