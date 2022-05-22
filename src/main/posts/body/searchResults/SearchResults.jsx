import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Preloader, ThreeDots } from 'react-preloader-icon'
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
	resultsMain: {
		width: '100%'
	},
	loader: {
		display:'flex',
		justifyContent: 'center',
		marginTop: '30px'
	},
	results: {
		position: 'relative'
	},
	notFound: {
		display: 'flex',
		fontSize: '.9rem',
		textAlign: 'center',
		lineHeight: '1.5',
		justifyContent: 'center'
	},
	arrowUp: {
		position: 'fixed',
		bottom: '0',
		right: '0'
	}
})

const Loader = () => {
	const classes = useStyles()
	return <div className={classes.loader}>
		<Preloader
	    use={ThreeDots}
	    size={33}
	    strokeWidth={6}
	    strokeColor="#5c568b"
	    duration={2000}
  	/>
	</div>	
}

const SearchResults = () => {
	const classes = useStyles()
	const hits = useSelector(state => state.app.results)
	const loader = useSelector(state => state.app.loader.post)
	const resultsMain = React.useRef(null)
	const [showArrow, setArrow] = React.useState(false)
	const handleScroll = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
	return (
		<section className={classes.resultsMain} ref={resultsMain} >
			
			{loader ? <Loader /> 
				: <Grow in={!loader}>
					<div className={classes.results}>
						{ hits.length === 0 ? 
							<div className={classes.notFound}>
								<p> Search query not found <br/> Try another search </p>
							</div> :
							hits.map((post, i) => {
								return (
									<Post key={i} post={post} />
								)
							})
						}
						<Fade in={true}>
							<IconButton className={classes.arrowUp} onClick={handleScroll} >
								<ArrowUpwardIcon />
							</IconButton>
						</Fade>
					</div>
				</Grow>
			}
		</section>
	)
}

export default SearchResults