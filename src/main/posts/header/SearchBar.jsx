import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, setPlaceholderImg, setQuery } from '../../../redux/appSlice'

const useStyles = makeStyles({
	searchBar: {
		display: 'flex',
		flexDirection: 'column'
	},
	input: {
		height: '100%',
		width: '100%',
		'&& .MuiOutlinedInput-input': {
			padding: '14.5px 14px',
			color: '#64503b',
			background: '#fff'
		},
		'&& .MuiOutlinedInput-root': {
			height: '100%',
			outline: '1px solid #ababab',
			transition: '.6s ease all',
			
		},
		'&& .MuiOutlinedInput-notchedOutline': {
			display: 'none'
		}
	},
	searchIcon: {
		fill: '#5c568b',
		fontSize: '1.7rem'
	},
	attrIcon: {
		alignSelf: 'flex-end'
	}
})


const SearchBar = ({classnames, inlineStyles}) => {
	const placeholderImg = useSelector(state => state.app.placeholderImg)
	const dispatch = useDispatch()
	const classes = useStyles()
	const query = useSelector(state => state.app.query)
	const [timer, setTimer] = React.useState(null)

	const handleInput = (value) => {
		dispatch(setQuery(value))
		clearTimeout(timer)
		const newTimer = setTimeout(() => {
			if (placeholderImg) {
				dispatch(setPlaceholderImg(false))
			}
			dispatch(fetchPosts(query))
		}, 1000)
		setTimer(newTimer)
	}
	return (
		<div className={[classes.searchBar, classnames].join(' ')} style={inlineStyles}>
			<TextField 
				onChange={({target}) => handleInput(target.value)}
				value={query}
				className={classes.input} 
				variant='outlined' 
				color='primary'
				placeholder='Search stories by title, url, or author'
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