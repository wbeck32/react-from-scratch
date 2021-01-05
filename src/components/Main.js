import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';


const Main = props => {
	console.log('props in main: ', props);
	return (
		<>
			<Card>
				<CardHeader>
					Qualifications Summary
				</CardHeader>
				<CardContent>
					<p>I&apos;m a front-end developer - ​React17&comma; Redux​&comma; ​Node.js​&comma; ​JavaScript​&comma; and ​Express​&comma; with extensive experience writing and using ​RESTful APIs​. I love ​React hooks​&comma;​ ES6​&comma; a​ ll kinds of testing frameworks​&comma; ​hackathons​&comma; and the ​command line.​ I have a previous ​15 years experience​ ​in responsive web development​ with ​HTML5​&comma; ​CSS3​&comma; ​SCSS​&comma; and ​AJAX​.
					</p>
					<p>					As a team member&comma; I’m a diligent problem solver who troubleshoots&comma; analyzes solutions&comma; and implements changes and writes documentation. I’m an approachable communicator who is able to explain coding solutions in non-technical terms.
</p>
				</CardContent>


			</Card>

		</>










	)



}

export default Main