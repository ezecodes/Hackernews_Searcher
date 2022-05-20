import React from 'react'
import styles from './styles/css.module.css'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Posts from './main/posts/Posts'
import PostDetails from './main/postDetails/PostDetails'

const theme = createTheme({
	primary: {
		main: '#a29cff',
	},
	secondary: {
		main: ''
	}
})


const App = () => {
	const currentURL = useSelector(state => state.app.postDetailsURL)
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path='/' element={<PostDetails />} />
				<Route path={`${document.location.href}/stories/${currentURL}`} element={<PostDetails />} />
			</Routes>
		</ThemeProvider>
	)
}
export default App