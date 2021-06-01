import styles from '../styles/Dashboard.module.scss'

const Dashboard = ({ name, bio, blog }) => {
	return (
		<div className={styles.dashboard}>
			<h1>Dashboard</h1>
			<h3 className={styles.title}>{name}</h3>
			<p>{`Bio: ${bio}`}</p>
			<p>{`Blog: ${blog}`}</p>
		</div>
	)
}

Dashboard.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/hta218')
	const user = await res.json()
	console.log('=======> user', user)
	return user
}

export default Dashboard
