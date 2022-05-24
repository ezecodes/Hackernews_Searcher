import React from 'react'
import styles from './styles/css.module.css'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Posts from './main/posts/Posts'
import PostDetails from './main/postDetails/PostDetails'

const App = () => {
	const currentURL = useSelector(state => state.app.postDetailsURL)
	return (
		<Routes>
			<Route path='/' element={<Posts />} />
			<Route path={`/stories/${currentURL}`} element={<PostDetails />} />
		</Routes>
	)
}
export default App