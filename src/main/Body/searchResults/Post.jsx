import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	post: {
		marginBottom: '10px'
	},
	postTitle: {
		fontSize: '1.12rem'
	},
	postDetails: {
		fontSize: '.8rem',
		margin: '2px 0 0 6px'
	}
})


const Post = ({post}) => {
	const classes = useStyles()
	return (
		<div className={classes.post}>
			<span className={classes.postTitle}> {post.title} </span>
			<div className={classes.postDetails} > 
				<span> {`${post.points} points`} </span> | 
				<span> {post.author} </span> | 
				{/*<span> 3 years ago </span> | */}
				<span> {`${post.num_comments} comments`} </span>  
			</div>
		</div>
	)
}

export default Post