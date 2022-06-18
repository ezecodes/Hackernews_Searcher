import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles }from '@material-ui/core/styles'
import PostDetail from './PostDetail'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import Fade from '@material-ui/core/Fade';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
	postDetails: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 240px',
		['@media (max-width: 1024px)']: {
			padding: '0 59px'
		},
		['@media (max-width: 700px)']: {
			padding: '0 13px'
		},
	},
	detailsContent: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	detailsHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		margin: '10px 0',
		top: 0,
		position: 'sticky',
		boxShadow: '0px 2px 2px 0px #f1f1f1',
		background: 'rgba(255,255,255,.8)',
		zIndex: 30,
		backdropFilter: 'blur(6px)'
	},
	arrowUp: {
		position: 'fixed',
		bottom: '0',
		right: '0'
	},
	backdrop: {
		background: '#e3e3e326',
		'& svg': {
			color: '#48496a'
		}
	},

	
})

const PostDetails = () => {
	const classes = useStyles()
	const objectID = useSelector(state => state.app.postDetailsURL)
	const story = useSelector(state => state.app.postDetails.find(i => i.id == objectID))
	const loader = useSelector(state => state.app.loader.postDetails)
	const handleScroll = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
	return (
		<section className={classes.postDetails} >
			<div className={classes.detailsContent}>
				<header className={classes.detailsHeader}>
					<div className={classes.headerItem}>
						<Link to='/'>
							<IconButton>
								<ArrowBackIcon />
							</IconButton>
						</Link>
					</div>
				</header>
				{!loader && <PostDetail story={story} storyAuthor={story.author} />}
			</div>
			<Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Fade in={!loader}>
				<IconButton className={classes.arrowUp} onClick={handleScroll} >
					<ArrowUpwardIcon />
				</IconButton>
			</Fade>
		</section>
	)
}

export default PostDetails