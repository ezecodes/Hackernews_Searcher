import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './header/Header'
import ScrollSpyHeader from './header/ScrollSpyHeader'
import Body from './body/Body'


const useStyles = makeStyles({
	posts: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		padding: '0 240px',
		['@media (max-width: 1024px)']: {
			padding: '0 59px'
		},
		['@media (max-width: 700px)']: {
			padding: '0 13px'
		},
	},
	content: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
})
const Posts = () => {
	const classes = useStyles()
	const ref = React.createRef()
	const [show, setDisplay]= React.useState({
		mainHeader: true, scrollHeader: false
	})

	const handleHeaders = () => {
		if (ref.current !== null) {
			const height = ref.current.getBoundingClientRect().height
			const winY = window.scrollY
			if (winY === 0) {
				setDisplay({...show, mainHeader: true, scrollHeader: false})
			}
			if (height < winY) {
				setDisplay({...show, mainHeader: false, scrollHeader: true})
			} else {
				setDisplay({...show, mainHeader: true, scrollHeader: false})
			}
		}
	}
	window.addEventListener('scroll', handleHeaders)
	return (
		<section className={classes.posts}>
			<section className={classes.content}>	
				<Header ref={ref} inlineStyles={{display: !show.mainHeader && 'none'}} />
				<ScrollSpyHeader inlineStyles={{display: !show.scrollHeader && 'none'}}  />
				<Body />
			</section>
			
		</section>
	)
}

export default Posts