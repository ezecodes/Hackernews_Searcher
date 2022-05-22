import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './header/Header'
import Body from './body/Body'


const useStyles = makeStyles({
	posts: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		padding: '0 130px',
		['@media (max-width: 1024px)']: {
			padding: '0 59px'
		},
		['@media (max-width: 700px)']: {
			padding: '0 13px'
		},
	},
	content: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
})
const Posts = () => {
	const classes = useStyles()
	return (
		<section className={classes.posts}>
			<section className={classes.content}>	
				<Header />
				<Body />
			</section>
			
		</section>
	)
}

export default Posts