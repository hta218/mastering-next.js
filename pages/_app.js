import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
	colors: {
		primary: '#cdcdcd'
	}
}

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
