import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import SortIcon from '@material-ui/icons/Sort'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import HeightIcon from '@material-ui/icons/Height'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { performSort, performReset } from '../../../redux/appSlice'

const useStyles = makeStyles({
	menu: {
		'&& .MuiListItem-root': {
			padding: '2px 10px',
			justifyContent: 'space-between',
			'& svg': {
				fontSize: '1.2rem'
			}
		}
	},
	sortValue: {
		marginRight: '8px',
		'&&::first-letter': {
			textTransform: 'capitalize'
		}
	},
	sortIcon: {
		fontSize: '2rem',
		color: '#384fa1'
	},
})


const SortMenu = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [arrowRule, setArrowRule] = React.useState({
		num_comments: 'down',
		created_at_i: 'down',
		author: 'down',
		points: 'down'
	}) 

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleArrowRules = (val) => {
		setArrowRule({...arrowRule, ...val})
	}
	const handleSort = (obj) => {
		dispatch(performSort(obj))
	}
	const resetSorted = () => {
		dispatch(performReset())
	}
	const handleMenu = (e) => {
		setAnchorEl(e)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<IconButton onClick={({target}) => {
				handleMenu(target)
			}}>
				<SortIcon className={classes.sortIcon} />
			</IconButton>	
			<Menu open={Boolean(anchorEl)}
				className={classes.menu}
				anchorEl={anchorEl} 
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
		      horizontal: 'left',
		    }}
		    transformOrigin={{
		    	vertical: 'top',
		      horizontal: 'center',
	   	 }}
			>

				{
					['author', 'created_at_i', 'points', 'num_comments'].map((val, i) => {
						return (
							<MenuItem key={i} onClick={() =>{
	            	handleArrowRules({[`${val}`]: arrowRule[`${val}`] === 'down' ? 'up' : 'down'})
	            	handleSort({
	            		matchCase: val,
	            		rule: arrowRule[`${val}`],
	            	})
	            	handleClose()
	            }}>
	            	<span className={classes.sortValue}> 
		            	{
		            		val === 'num_comments' ? 'Comments length' : val === 'created_at_i' ? 'Date' : val
		            	} 
	            	</span>
	            	{
	            		arrowRule[`${val}`] === 'down' ?
		            		<ArrowDownwardIcon /> :
		            		<ArrowUpwardIcon />
	            	}
	            </MenuItem>
						)
					})
				}
	      <MenuItem onClick={() => {
	      	handleClose()
	      	resetSorted()
	      }} >
	      	<span> Reset </span>
	      </MenuItem>
	    </Menu>
    </>
	)
}

export default SortMenu