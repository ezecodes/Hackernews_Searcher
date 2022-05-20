import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchPostDetails, setPostDetailsURL} from '../../../../redux/appSlice'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../../../UserAvatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
	post: {
		marginBottom: '10px'
	},
	cardHeader: {
		'&& .MuiCardHeader-title': {
			fontWeight: 'bold'
		},
		'&& .MuiCardHeader-subheader': {
			fontSize: '.74rem'
		}
	},
	cardContent: {
		padding: '3px 16px',
		'&& .MuiTypography-body1': {
			fontSize: '1rem',
		},
		'&& .MuiTypography-body2': {
			color: 'rgb(0 0 0 / 99%)',
			fontSize: '.965rem',
			lineHeight: '1.4'
		}
	},
	cardActions: {
		padding: '5px',
		justifyContent: 'flex-end'
	},
	actions: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '15px',
		fontSize: '.8rem !important',
		'&& .MuiButtonBase-root': {
			padding: '3px',
		}
	},
	points: {
		'&& *:not(path)': {
			color: '#ab4da8'
		},
	},
	childrenCount: {
		'&& *:not(path)': {
			color: '#7b86bb'
		},
	},
})

const getDate = (date) => {
	return (/[0-9]*-[0-9]*-[0-9]*/).exec(date)[0]
}

const Post = ({post}) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const handlePostDetails = (objectID) => {
		dispatch(setPostDetailsURL(objectID))
		dispatch(fetchPostDetails(objectID))
	}
	console.log(post)
	return (
		<Card className={classes.post}>
			<CardHeader 
				avatar=
					{
						<UserAvatar name={post.author} />
					}
				title={post.author}
				subheader={getDate(post.created_at)}
				className={classes.cardHeader}
			/>
			<CardContent className={classes.cardContent} >
				<Typography variant='body1' component='h2'>
					{post.title}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions} >
				<span className={[classes.actions, classes.points].join(' ')}>
					<ArrowDropUpIcon />
					<span className={classes.actionInfo}>{post.points}</span>
				</span>
				<span className={[classes.actions, classes.childrenCount].join(' ')}>
					<IconButton>
						<CommentIcon />
					</IconButton>
					<span className={classes.actionInfo}>{post.num_comments}</span>
				</span>
			</CardActions>
			{/*<span className={classes.postTitle} onClick={() => handlePostDetails(post.objectID)} >
			 <Link to={`/stories/${post.objectID}`}> {post.title}</Link> 
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

			</div>*/}
		</Card>
	)
}

export default Post