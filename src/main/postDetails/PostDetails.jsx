import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles }from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import UserAvatar from './UserAvatar';
import Typography from '@material-ui/core/Typography';

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
		// ['@media (max-width: 1024px)']: {
		// 	width: '100%',
		// 	padding: '0'
		// }
	},
	card: {
		width: '100%',
		'&& .MuiCardHeader-title': {
			fontWeight: 'bold'
		},
		'&& .MuiCardHeader-subheader': {
		}
	},
	cardContent: {
		padding: '3px 16px',
		'&& .MuiTypography-body1': {
			fontSize: '1rem',
			fontWeight: 'bold'
		},
		'&& .MuiTypography-body2': {
			color: 'rgb(0 0 0 / 99%)',
			fontSize: '.965rem',
			lineHeight: '1.4'
		}
	},
	avatar: {
		textTransform: 'uppercase',
	},
})

// const parseHTML = (text) => {
// 	const parser = new DOMParser()
// 	return parser.parseFromString(story.text, 'text/html')
// }

const getDate = (date) => {
	return (/[0-9]*-[0-9]*-[0-9]*/).exec(date)[0]
}

const PostDetails = () => {
	const classes = useStyles()
	const story = useSelector(state => state.app.postDetails)
	console.log(story)
	return (
		<section className={classes.postDetails} >
			<div className={classes.detailsContent}>
				<Card className={classes.card} >
					<CardHeader 
						avatar={
							<UserAvatar name={story.author}
								className={classes.avatar} 
							/> 
						}
						title={story.author}
						subheader={getDate(story.created_at)}
					/>
					<CardContent className={classes.cardContent} >
						<Typography variant='body1' component='h1'>
							{story.title}
						</Typography>
						 <Typography variant="body2" color="textSecondary" component="p" 
						 	dangerouslySetInnerHTML={{__html: story.text }} />
					</CardContent>
					<CardActions disableSpacing>
						<span className={classes.actions} >
							<ArrowDropUpIcon />
							<span className={classes.actionInfo}>{story.points}</span>
						</span>
						<span className={classes.actions} >
							<IconButton>
								<CommentIcon />
							</IconButton>
							<span className={classes.actionInfo}>{story.children.length}</span>
						</span>
					</CardActions>
				</Card>
			</div>
		</section>
	)
}

export default PostDetails