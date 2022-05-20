import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Preloader, TailSpin } from 'react-preloader-icon'
import IconButton from '@material-ui/core/IconButton';

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
	    use={TailSpin}
	    size={50}
	    strokeWidth={6}
	    strokeColor="#262626"
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
			<React.Suspense fallback={<Loader />}>
				<div className={classes.results}>
					{
						hits.map((post, i) => {
							return (
								<Post key={i} post={post} />
							)
						})
					}
				</div>
			</React.Suspense>
		</section>
	)
}

export default SearchResults