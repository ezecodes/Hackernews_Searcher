import React from 'react'
import SearchResults from './searchResults/SearchResults'
import { makeStyles } from '@material-ui/core/styles'
import image from '/src/assets/images/undraw_post_re_mtr4 (1).svg'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
	body: {
		width: '100%',
		display: 'flex',
		margin: '21px 0 0 0',
		
	},
	bodyContent: {
		width: '100%',
	},
	placeholderImg: {
		width: '300px',
		margin: '0 auto',
		['@media (max-width: 425px)']: {
			width: '60%'
		}
	}
	
})
const Body = () => {
	const classes = useStyles()
	const placeholderImg = useSelector(state => state.app.placeholderImg)
	return (
		<section className={classes.body}>
			<div className={classes.bodyContent}>
				{placeholderImg ? 
					<div className={classes.placeholderImg}>
						<img src={image} width='100%' height='100%' alt='posts' />
					</div>
					: <SearchResults />
				}
			</div>
		</section>
	)
}

export default Body