import React from 'react'
import SearchResults from './searchResults/SearchResults'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import EditAttributesIcon from '@material-ui/icons/EditAttributes'

const useStyles = makeStyles({
	body: {
		width: '100%',
		display: 'flex',
		margin: '21px 0 0 0',
		padding: '0 59px',
	},
	bodyContent: {
		width: '100%',
		
	},
	
})

const Body = () => {
	const classes = useStyles()
	return (
		<section className={classes.body}>
			<div className={classes.bodyContent}>
				<SearchResults />
			</div>
		</section>
	)
}

export default Body