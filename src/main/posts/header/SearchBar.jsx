import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../../redux/appSlice'

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
		fill: '#e1ceba',
		fontSize: '1.7rem'
	}
})


const SearchBar = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const handleInput = (query) => {
		dispatch(fetchPosts(query))
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