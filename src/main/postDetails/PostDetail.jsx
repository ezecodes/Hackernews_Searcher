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
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../UserAvatar';
import { Link } from 'react-router-dom'
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles({
	cardMain: {
		width: '100%',
		'&& .MuiCardHeader-title': {
			fontWeight: 'bold'
		},
		'&& .MuiCardHeader-subheader': {
			fontSize: '.74rem'
		}
	},
	avatar: {
		textTransform: 'uppercase',
	},
	cardContent: {
		padding: '3px 16px',
		'&& .MuiTypography-body1': {
			fontSize: '1rem',
			fontFamily: 'LibreFranklin-Bold !important',
			marginBottom: '10px'
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
		zIndex: 20,
		'&& *:not(path)': {
			color: '#7b86bb'
		},
	},
	nestedChild: {
		margin: '5px 0 9px 10px',
		boxShadow: '1px -4px 12px 0px #b9b9b92e'
	},
	popper: {
		overflowWrap: 'anywhere',
		zIndex: 20,
		width: '214px',
		left: '-7% !important',
		top: '11px !important',
		boxShadow: '0 0 6px 0px #e1d9ce',
		background: '#fff',
		padding: '5px',
		'& a': {
			fontSize: '14px'
		}
	}
})

const getDate = (date) => {
	return (/[0-9]*-[0-9]*-[0-9]*/).exec(date)[0]
}

const PostDetail = ({story}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null)
	let URL = true
	if (story.url === '' || story.url === null) {
		URL = false
	} else {
		URL = story.url
	}
	const handlePopper = (bool, target) => {
		if (bool) {
			setAnchorEl(target)
		} else {
			setTimeout(() => setAnchorEl(null), 4000)
		}
	}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
			{URL && <span className={classes.actions}>
				<Popper open={Boolean(anchorEl)} className={classes.popper}
					anchorEl={anchorEl} placement='top-start'
				>
					<a href={`${story.url}`}> {story.url} </a>
				</Popper>
				<IconButton 
					onMouseOver={({target}) => handlePopper(true, target)} 
					onMouseOut={() => handlePopper(false, null)}
				>
					<LinkIcon />
				</IconButton>
			</span>}
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