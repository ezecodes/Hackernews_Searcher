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
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../UserAvatar';
import { Link } from 'react-router-dom'
import Popover from '@material-ui/core/Popover';



const useStyles = makeStyles({
	cardMain: {
		width: '100%',
		boxShadow: '0px 0px 4px 2px #ebebeb',
		'&& .MuiCardHeader-title': {
			fontWeight: 'bold'
		},
		'&& .MuiCardHeader-subheader': {
			fontSize: '.74rem'
		},
	},
	avatar: {
		textTransform: 'uppercase',
	},
	cardHeader: {
		'& a': {
			color: 'inherit',
			textDecoration: 'none'
		}
	},
	popper: {
		'& .MuiPaper-root': {
			boxShadow: '0 0 6px 0px #e1d9ce',
			background: '#fff',
			padding: '5px 10px',
			width: '300px',
			wordBreak: 'break-all',
			'& a': {
				fontSize: '.95rem',
				color: '#9f2727',
				textDecoration: 'none'
			}
		}
	},
	cardContent: {
		padding: '3px 16px',
		wordBreak: 'break-word',
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
		padding: '10px 5px',
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
		cursor: 'pointer',
		'&& *:not(path)': {
			color: '#8286bb'
		},
	},
	nestedPostDetail: {
		margin: '5px 0 9px 10px',
		boxShadow: '1px -4px 12px 0px #b9b9b92e'
	},
	
	authorNotify: {
		fontSize: '.75rem',
		color: '#ff7f50'
	}
})

const getDate = (date) => {
	return (/[0-9]*-[0-9]*-[0-9]*/).exec(date)[0]
}

const PostDetail = ({story, storyAuthor}) => {
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
			setAnchorEl(null)
		}
	}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

	return (
	<Card className={classes.cardMain} >
		<CardHeader className={classes.cardHeader}
			avatar={
				<a href={`https://news.ycombinator.com/user?id=${story.author}`} target='_blank' >
					<UserAvatar name={story.author}
						className={classes.avatar} 
					/> 
				</a>
			}
			title={
				story.type === 'comment' && story.author === storyAuthor ? 
					<a href={`https://news.ycombinator.com/user?id=${story.author}`} target='_blank'>
						{story.author} 
					 	<span className={classes.authorNotify} > (Author) </span>
					</a> :
					<a href={`https://news.ycombinator.com/user?id=${story.author}`} target='_blank'>
						{story.author} 
					</a>
				}
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
			{ story.points !== null ? 
					<span className={[classes.actions, classes.points].join(' ')} >
						<ArrowDropUpIcon />
						<span className={classes.actionInfo}>{`${story.points}`}</span>
					</span> 
				: <></>
			}
			<span className={[classes.actions, classes.childrenCount].join(' ')} onClick={() => handleExpandClick()} >
				<IconButton >
					<CommentIcon />
				</IconButton>
				<span className={classes.actionInfo}>{story.children.length}</span>
			</span>
			{URL && 
			<span className={classes.actions}>
				<IconButton 
					onClick={({target}) => handlePopper(true, target)} 
				>
					<LinkIcon />
				</IconButton>
				<Popover 
					open={Boolean(anchorEl)}
					onClose={() => handlePopper(false, null)}
					anchorEl={anchorEl}
					className={classes.popper}
				  anchorOrigin={{
				    vertical: 'bottom',
				    horizontal: 'right',
				  }}
				  transformOrigin={{
				    vertical: 'top',
				    horizontal: 'right',
				  }}
				>
				 <Typography variant='body2' variant='strong'> 
				 	<a href={story.url} target='_blank' > {story.url} </a> 
				 </Typography>
				</Popover>
				
			</span>}
		</CardActions>
		{
			story.children.map((i, key) => {
				return (
					<Collapse key={key} in={expanded} timeout="auto" unmountOnExit >
						<div className={classes.nestedPostDetail} >
							<PostDetail story={i} storyAuthor={storyAuthor} />
						</div>
					</Collapse>
				)
			})
		}
	</Card>
	)
}

export default PostDetail