import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchPostDetails, setPostDetailsURL} from '../../../redux/appSlice'

const useStyles = makeStyles({
	post: {
		marginBottom: '10px'
	},
	postTitle: {
		fontSize: '1.12rem',
		'&& a': {
			transition: '.4s ease all',
			textDecoration: 'none',
			color: '#990303',
		},
		'&& a:hover': {
			color: '#e30101'
		}
	},
	postDetails: {
		fontSize: '.8rem',
		margin: '2px 0 0 6px',
		'&& span:not(span:last-of-type)': {
			paddingRight: '8px',
			borderRight: '1px solid '
		},
		'&& span:not(span:first-child)': {
			paddingLeft: '8px',
		}
	}
})


const Post = ({post}) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const handlePostDetails = (objectID) => {
		dispatch(setPostDetailsURL(objectID))
		dispatch(fetchPostDetails(objectID))
	}
	return (
		<div className={classes.post}>
			<span className={classes.postTitle} onClick={() => handlePostDetails(post.objectID)} >
			 <Link to={`stories/${post.objectID}`}> {post.title}</Link> 
			</span>
			<div className={classes.postDetails} > 
				<span> 
					{`${post.points} points`}
				</span>
				<span> 
					{post.author}
				</span> 
				<span> 
					{`${post.num_comments} comments`}
				</span>  

			</div>
		</div>
	)
}

export default Post