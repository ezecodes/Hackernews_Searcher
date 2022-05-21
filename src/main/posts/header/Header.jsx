import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import SearchBar from './SearchBar'
import { setMode } from '../../../redux/appSlice'

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
	const light = useSelector(state => state.app.light)
	const changeMode = () => {
		dispatch(setMode(!light))
	}
	return (
		<header className={classes.header} >
			<div className={classes.headerItem}>

				<div className={classes.intro}>
					<div className={classes.row}>
						<h1> <strong>Hacker News</strong> <span className={classes.spanh1}>/search </span>  </h1>
					</div>
					<div className={classes.row}>
						<IconButton onClick={changeMode}>
							{light ? <WbIncandescentIcon /> : <NightsStayIcon /> }
						</IconButton>	
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