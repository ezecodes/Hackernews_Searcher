import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Preloader, ThreeDots } from 'react-preloader-icon'
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';

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

	},
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
	return (
		<section className={classes.resultsMain} >
			{loader ? <Loader /> 
				: <Grow in={!loader}>
					<div className={classes.results}>
						{
							hits.map((post, i) => {
								return (
									<Post key={i} post={post} />
								)
							})
						}
					</div>
				</Grow>
			}
		</section>
	)
}

export default SearchResults