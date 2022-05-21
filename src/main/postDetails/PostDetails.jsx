import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles }from '@material-ui/core/styles'
import PostDetail from './PostDetail'

const useStyles = makeStyles({
	postDetails: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	detailsContent: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '900px',
		padding: '0 4%',
		['@media (max-width: 425px)']: {
			width: '100%',
			padding: '0 1.5%'
		}
	},
	
	
})

const PostDetails = () => {
	const classes = useStyles()
	const story = useSelector(state => state.app.postDetails)
	const loader = useSelector(state => state.app.loader.postDetails)
	return (
		<section className={classes.postDetails} >
			<div className={classes.detailsContent}>
				{!loader && <PostDetail story={story} />}
			</div>
		</section>
	)
}

export default PostDetails