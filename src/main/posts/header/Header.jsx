import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchBar from './SearchBar'
import SortMenu from './SortMenu'

const useStyles = makeStyles({
	header: {
		position: 'sticky',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
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
		marginTop: '3rem',
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


const Header = React.forwardRef(({inlineStyles}, ref) => {
	const classes = useStyles()
	return (
		<header className={classes.header} ref={ref} style={inlineStyles} >
			<div className={classes.headerItem}>

				<div className={classes.intro}>
					<div className={classes.row}>
						<h1> <strong>Hacker News</strong> <span className={classes.spanh1}>/search </span>  </h1>
					</div>
					<div className={classes.row}>
						<SortMenu />
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
})

export default Header