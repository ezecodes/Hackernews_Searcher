import React from 'react'
import SearchResults from './SearchResults'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	body: {
		width: '100%',
		display: 'flex'
	}
})

const Body = () => {
	const classes = useStyles()
	return (
		<section className={classes.body}>
			<SearchResults />
		</section>
	)
}

export default Body