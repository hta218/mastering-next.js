import styles from '../styles/Dashboard.module.scss'
import styled from 'styled-components'

const Bio = styled.p`
	font-weight: bold;
	font-size: 2em;
	color: ${({ theme }) => theme.colors.primary}
`

const Dashboard = ({ name, bio, blog }) => {
	return (
		<div className={`${styles.dashboard} styled-jsx-dashboard`}>
			<h1>Dashboard</h1>
			<h3 className={styles.title}>{name}</h3>
			<Bio>{`Bio: ${bio}`}</Bio>
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
