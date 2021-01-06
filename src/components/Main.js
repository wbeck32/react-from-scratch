import {
	Card,
	CardContent,
	CardHeader,
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from '@material-ui/core';
import Header from './Header'
import Footer from './Footer'
import React from 'react';
import data from '../static/data'

const Main = props => {

	console.log('props in main: ', props);
	return ( 
		<>
		<Card>
			<>
				<h2>Wendy Beck</h2>
				<h3>Portland, OR 97210 | webeck@gmail.com | 415-786-2948</h3>
				<h3>linkedin.com/in/wendybeck​ | ​github.com/wbeck32</h3>
				<h3>Senior Web Developer • React/Redux Developer • Front-end Developer</h3>
			</>
		</Card>
		<Card>
		<CardHeader>
		Qualifications Summary 
		</CardHeader>  
		<CardContent>
		<p>I'm a front-end developer - ​React17, Redux​, ​Node.js​, ​JavaScript​, and ​Express​, with extensive experience writing and using ​RESTful APIs​. I love ​React hooks​,​ ES6​, a​ ll kinds of testing frameworks​, ​hackathons​, and the ​command line.​ I have a previous ​15 years experience​ ​in responsive web development​ with ​HTML5​, ​CSS3​, ​SCSS​, and ​AJAX​. </p>  
		<p> As a team member, I’ m a diligent problem solver who troubleshoots, analyzes solutions, and implements changes and writes documentation.I’ m an approachable communicator who is able to explain coding solutions in non - technical terms. </p>  
		</CardContent>
		</Card>
		<Card>
		<CardContent>
		<table>
		<caption>Skills Summary</caption>
		<thead>
		<tr><th></th><th></th><th></th><th></th></tr>
		<tr><th></th><th></th><th></th><th></th></tr>
		
		</thead>
		<tbody>
		<tr><th>React/Redux</th><th>RESTful APIs</th><th>Node.js</th><th>ES6</th></tr>
		<tr><th>Anaytics platforms</th><th>TDD Testing</th><th>SCSS</th><th>Mocha, Chai, Sinon</th></tr>
		
		
		</tbody>
		
		</table>
		
		</CardContent>
		</Card>
		<Paper elevation={1}/>
<Accordion>
<AccordionSummary>
CDK Global​ | ​Senior React Developer​ | 09/2020 – 01/2021 | Portland, OR
</AccordionSummary>
<AccordionDetails>
Used the newest internal React component library, based on styled-components, to build shared components for the Fortellis Payment Component.
➔ Refactored code in the Fortellis Component to update modules, simplify the code, and implement the new shared component library.
➔ Updated test cases and increasing test coverage for the Fortellis Component, using React Testing Library, Jest, and Axios.
➔ Updated Storybook to the latest version and add-ons to use it as an effective UI development tool and testing framework.
</AccordionDetails>
</Accordion>
		

		</>
		
		)
		
		
		
	}
	
	export default Main