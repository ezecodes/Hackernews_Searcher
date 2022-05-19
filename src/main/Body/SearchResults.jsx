import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
	resultsMain: {

	}
})


const SearchResults = () => {
	const classes = useStyles()

	return (
		<section className={classes.resultsMain} >
			<div className={classes.results}>
				<div className={classes.rsGroup}>
					<span className={classes.title}> Migrating from postgrel to mongodb </span>
				</div>
			</div>
		</section>
	)
}

export default SearchResults