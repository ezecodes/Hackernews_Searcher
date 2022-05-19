import React from 'react'
import SearchResults from './searchResults/SearchResults'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	body: {
		width: '100%',
		display: 'flex',
		padding: '0 17px',
		margin: '16px 0'
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