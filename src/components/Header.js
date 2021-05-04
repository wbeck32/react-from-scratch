import React from 'react';
import {Card} from '@material-ui/core'


const Header = () => {
	const headerStyle = {
		height: '.25vh',
		border: '2px solid green'
	}
	return (

		<Card

			children={
				<>
					<h2>Wendy Beck</h2>
					<h3>Portland, OR 97210 | webeck@gmail.com | 415-786-2948</h3>
					<h3>linkedin.com/in/wendybeck​ | ​github.com/wbeck32</h3>
					<h3>Senior Web Developer • React/Redux Developer • Front-end Developer</h3>

				</>
			}
			raised
		/>
	)
}
export default Header
