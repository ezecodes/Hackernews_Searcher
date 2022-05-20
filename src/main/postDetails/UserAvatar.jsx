import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const colors = ['#cd6e6e','#d19205','#6ccef3','#6c89f3','#5540a9','#9f7775','#e776da', '#1cd5cc','#f1a924']

const UserAvatar = (props) => {
	const {name, className} = props
	let val = '', split = name.split(' ')
	split.length <= 2 
	? split.forEach(i => val += i[0]) 
	: val = split[0].charAt(0) + split[split.length - 1].charAt(0)
	
	return (
		<Avatar 
			className={[className].join(' ')} 
			style={{background: colors[name.length] || '#bdbdbd'}}
			> 
				{val} 
		</Avatar>
	)
}

export default UserAvatar