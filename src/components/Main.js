import {
	Card,
	CardContent,
	CardHeader
} from '@material-ui/core';

import React from 'react';

const Main = props => {
	console.log('props in main: ', props);
	return ( <>
		<Card>
		<CardHeader>
		Qualifications Summary 
		</CardHeader>  
		<CardContent>
		<p> I'm a front-end developer - ​React17, Redux​, ​Node.js​, ​JavaScript​, and ​Express​, with extensive experience writing and using ​RESTful APIs​. I love ​React hooks​,​ ES6​, a​ ll kinds of testing frameworks​, ​hackathons​, and the ​command line.​ I have a previous ​15 years experience​ ​in responsive web development​ with ​HTML5​, ​CSS3​, ​SCSS​, and ​AJAX​. </p>  
		<p> As a team member, I’ m a diligent problem solver who troubleshoots, analyzes solutions, and implements changes and writes documentation.I’ m an approachable communicator who is able to explain coding solutions in non - technical terms. </p>  
		</CardContent>
		
		</Card>
		
		</>
		
		)
		
		
		
	}
	
	export default Main