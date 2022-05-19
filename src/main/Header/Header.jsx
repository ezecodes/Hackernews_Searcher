import React from 'react'
import SearchBar from './SearchBar'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles({
	header: {
		background: '#464544',
		position: 'sticky'
	},
	toolbar: {
		minHeight: 'initial',
		padding: '12px 20px'
	},
	headerItem: {
		'&& h1': {
			color: '#fff',
			lineHeight: '1.2'
		}
	}
})


const Header = () => {
	const classes = useStyles()

	return (
		<AppBar className={classes.header}>
			<ToolBar className={classes.toolbar} >
				<div className={classes.headerItem}>
					<h1> Search <br/> Hacker News </h1>
				</div>
				<SearchBar />	
			</ToolBar>
		</AppBar>
	)
}

export default Header