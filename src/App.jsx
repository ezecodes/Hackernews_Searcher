import React from 'react'
import Main from './main/Main'
import styles from './styles/css.module.css'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
	primary: {
		main: '#a29cff',
	},
	secondary: {
		main: ''
	}
})


const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	)
}
export default App