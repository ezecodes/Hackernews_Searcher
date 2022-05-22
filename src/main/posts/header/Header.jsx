import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import SortIcon from '@material-ui/icons/Sort'
import HeightIcon from '@material-ui/icons/Height'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import SearchBar from './SearchBar'
import { performSort, performReset } from '../../../redux/appSlice'
import Grow from '@material-ui/core/Grow';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
	header: {
		position: 'sticky',
		width: '100%',
		padding: '0 50px',
		marginTop: '3rem',
		display: 'flex',
		flexDirection: 'column',
		['@media (max-width: 620px)']: {
			padding: '0 20px'
		},
		['@media (max-width: 425px)']: {
			padding: '0 12px'
		},
		
	},
	headerItem: {
		'&& h1': {
			fontSize: '1.5rem',
			lineHeight: '1.1',
			color: '#838383',
			fontFamily: 'LibreFranklin-Bold !important',

		},
		'&& strong': {
			color: '#ff8303'
		}
	},
	intro: {
		display: 'flex',
		justifyContent: 'space-between'
	},
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
		color: '#000e42'
	},
	spanh1: {
		fontSize: '1rem',
		fontWeight: '100',
		display: 'block',
		color:'#4e6b9f',
		marginTop: '2px'
	},
	searching: {
		margin: '26px 90px',
		['@media (max-width: 620px)']: {
			margin: '26px 33px'
		},
		['@media (max-width: 425px)']: {
			margin: '26px 0'
		}
	}
})


const Header = () => {
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
		<header className={classes.header} >
			<div className={classes.headerItem}>

				<div className={classes.intro}>
					<div className={classes.row}>
						<h1> <strong>Hacker News</strong> <span className={classes.spanh1}>/search </span>  </h1>
					</div>
					<div className={classes.row}>
						<IconButton onClick={({target}) => {
							handleMenu(target)
						}}>
							<SortIcon className={classes.sortIcon} />
						</IconButton>	
						<Menu open={Boolean(anchorEl)}
							className={classes.menu}
							anchorEl={anchorEl} 
							onClose={handleClose}>

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
					</div>
				</div>
				
			</div>
			<div className={classes.headerItem}>
				<div className={classes.searching}>
					<SearchBar />
				</div>
			</div>
		</header>
	)
}

export default Header