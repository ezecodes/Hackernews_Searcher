import React from 'react'
import {v4 as uuidv4 } from 'uuid'
import { makeStyles }from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../UserAvatar';

const useStyles = makeStyles({
	cardMain: {
		width: '100%',
		'&& .MuiCardHeader-title': {
			fontWeight: 'bold'
		},
		'&& .MuiCardHeader-subheader': {
		}
	},
	avatar: {
		textTransform: 'uppercase',
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
	cardActions: {
		padding: '8px',
		justifyContent: 'flex-end'
	},
	actions: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '15px',

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
	nestedChild: {
		margin: '5px 0 9px 10px',
		boxShadow: '1px -4px 12px 0px #b9b9b92e'
	}
})

const getDate = (date) => {
	return (/[0-9]*-[0-9]*-[0-9]*/).exec(date)[0]
}

const PostDetail = ({story}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [map, setMap] = React.useState(false)
  const handleExpandClick = () => {
  	setMap(!map)
    setExpanded(!expanded);
  };

	const showComments = () => {

	}
	return (
	<Card className={classes.cardMain} >
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
			{story.title !== null ?
				 <Typography variant='body1' component='h1'>
					{story.title}
				</Typography> : 
				<></>
			}
		 <Typography variant="body2" color="textSecondary" component="p" 
		 	dangerouslySetInnerHTML={{__html: story.text }} />
		</CardContent>
		<CardActions disableSpacing className={classes.cardActions} >
			{ story.points !== null ? <span className={[classes.actions, classes.points].join(' ')} >
				<ArrowDropUpIcon />
				<span className={classes.actionInfo}>{story.points}</span>
			</span> : <></>}
			<span className={[classes.actions, classes.childrenCount].join(' ')} >
				<IconButton onClick={() => handleExpandClick()} >
					<CommentIcon />
				</IconButton>
				<span className={classes.actionInfo}>{story.children.length}</span>
			</span>
		</CardActions>
		<React.Suspense>
			{
				story.children.map((i, key) => {
					return (
						<Collapse key={key} in={expanded} timeout="auto" unmountOnExit >
							<div className={classes.nestedChild} >
								<PostDetail story={i} />
							</div>
						</Collapse>
					)
				})
			}
		</React.Suspense>
	</Card>
	)
}

export default PostDetail