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
	arrowUp: {
		position: 'fixed',
		bottom: '0',
		right: '0'
	},
	backdrop: {
		background: '#00000026',
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
			<header className={classes.detailsHeader}>
				<div className={classes.headerItem}>
					<Link to='/'>
						<IconButton>
							<ArrowBackIcon />
						</IconButton>
					</Link>
				</div>
			</header>
			<div className={classes.detailsContent}>
				{!loader && <PostDetail story={story} />}
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