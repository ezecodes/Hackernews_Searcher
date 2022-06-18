import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide';

import SortMenu from './SortMenu'
import SearchBar from './SearchBar'

const useStyles = makeStyles({
	scrollHeader: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		padding: '.5rem 0',
		margin: '10px 0',
		top: 0,
		position: 'sticky',
		boxShadow: '0px 2px 2px 0px #f1f1f1',
		background: '#fff',
		zIndex: 30,
		// backdropFilter: 'blur(6px)',
		'&& .MuiOutlinedInput-root': {
			outline: 'none',
		},

	},
	searchBar: {
		width: '85%'
	},
})

const ScrollSpyHeader = ({classnames, inlineStyles}) => {
	const classes = useStyles()
	return (
		<Slide direction='down' in={true} >
			<header className={[classes.scrollHeader, classnames].join(' ')} style={inlineStyles}>
				<SearchBar classnames={classes.searchBar} />
				<SortMenu />
			</header>
		</Slide>
	)
}

export default ScrollSpyHeader
