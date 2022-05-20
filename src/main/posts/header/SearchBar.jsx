import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../../redux/appSlice'

const useStyles = makeStyles({
	searchBar: {
		display: 'flex',
		flexDirection: 'column'
	},
	input: {
		width: '100%',
		'&& .MuiOutlinedInput-input': {
			padding: '14.5px 14px',
			color: '#64503b'
		},
		'&& .MuiOutlinedInput-root': {
			border: '1px solid #343c5e',
			transition: '.6s ease all',
			'&&:hover': {
				borderColor: '#000'
			}
		},
		'&& .MuiOutlinedInput-notchedOutline': {
			display: 'none'
		}
	},
	searchIcon: {
		fill: '#c5a788',
		fontSize: '1.7rem'
	},
	attrIcon: {
		alignSelf: 'flex-end'
	}
})


const SearchBar = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const handleInput = (query) => {
		dispatch(fetchPosts(query))
	}
	const setAttr = () => {

	}
	return (
		<div className={classes.searchBar}>
			<TextField 
				className={classes.input} 
				variant='outlined' 
				color='primary'
				placeholder='Search stories by title, url, or author'
				onChange={({target}) => handleInput(target.value)} 
				InputProps={{
		    	startAdornment: <InputAdornment position='start' >
		    		<SearchIcon className={classes.searchIcon} />
		    	</InputAdornment>
		    }}
			/>
			{/*<IconButton onClick={setAttr} className={classes.attrIcon} >
				<EditIcon />
			</IconButton>*/}
		</div>
	)
}

export default SearchBar