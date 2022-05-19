import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

import { dispatch } from 'react-redux'

const useStyles = makeStyles({
	searchBar: {
		flex: 1,
		marginLeft: '30px'
	},
	input: {
		width: '100%',
		'&& .MuiOutlinedInput-input': {
			padding: '14.5px 14px',
			color: '#fff'
		},
		'&& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#c9b5a1'
		}
	},
	searchIcon: {
		fill: '#ffe7ce',
		fontSize: '1.7rem'
	}
})


const SearchBar = () => {
	const classes = useStyles()
	const handleInput = (value) => {
		fetch(`http://hn.algolia.com/api/v1/search?query=${value}&tags=story`)
		.then(res => res.json())
		.then(res => {
			// dispatch({
			// })
		})
	}
	return (
		<div className={classes.searchBar}>
			<TextField 
				className={classes.input} 
				variant='outlined' 
				onChange={({target}) => handleInput(target.value)} 
				InputProps={{
		    	startAdornment: <InputAdornment position='start' >
		    		<SearchIcon className={classes.searchIcon} />
		    	</InputAdornment>
		    }}
			/>
		</div>
	)
}

export default SearchBar