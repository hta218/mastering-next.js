import styles from '../styles/Dashboard.module.scss'

const Dashboard = ({ name, bio, blog }) => {
	return (
		<div className={`${styles.dashboard} styled-jsx-dashboard`}>
			<h1>Dashboard</h1>
			<h3 className={styles.title}>{name}</h3>
			<p>{`Bio: ${bio}`}</p>
			<p>{`Blog: ${blog}`}</p>
			<style jsx>{`
				.styled-jsx-dashboard:hover {
					background-color: gray;
				}
			`}</style>
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
