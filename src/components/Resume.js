import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Paper
} from "@material-ui/core";
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import dataArray from "../static/dataArray";
import {useTheme} from "@material-ui/core/styles";


const Resume = props => {
	console.log("props in main: ", props);
	const theme = useTheme(),
		jobs = dataArray.map(d => <>
			<Accordion key={Math.random().toFixed(5)}>
				<AccordionSummary id={d.summaryId} aria-controls={d.summaryAriaControls} expandIcon={
					<IconButton aria-label="expand">
						<SvgIcon>
							<path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"/>
						</SvgIcon>
					</IconButton>
				}>
					{d.headline}
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{d.description.map(q => <li key={Math.random().toFixed(5)}>{q}</li>)}
					</ul>
				</AccordionDetails>
			</Accordion>
		</>);


	return (
		<>
			<h1 style={{color : theme.palette.primary}} >Resume</h1>
			<Card>
				<>
					<h2>Wendy Beck</h2>
					<h3 >Portland, OR 97210 | webeck@gmail.com | 415-786-2948</h3>
					<h3>linkedin.com/in/wendybeck​ | ​github.com/wbeck32</h3>
					<h3>Senior Web Developer • React/Redux Developer • Front-end Developer</h3>
				</>
			</Card>
			<Card>
				<CardHeader>
			Qualifications Summary
				</CardHeader>
				<CardContent>
					<p>I'm a front end developer - ​React17, Redux​, ​Node.js​, ​JavaScript​, and ​Express​, with extensive experience writing and using ​RESTful APIs​. I love ​React hooks​,​ ES6​, a​ll kinds of testing frameworks​, ​hackathons​, and the ​command line.​ I have a previous ​15 years experience​ ​in responsive web development​ with ​HTML5​, ​CSS3​, ​SCSS​, and ​AJAX​.</p>
					<p>As a team member, I’m a diligent problem solver who troubleshoots, analyzes solutions, and implements changes and writes documentation. I’m an approachable communicator who is able to explain coding solutions in non-technical terms.</p>
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<table>
						<caption>Skills Summary</caption>
						<thead>
							<tr><th>Languages</th><th>Testing Frameworks</th><th>APIs</th><th>UI</th></tr>
						</thead>
						<tbody>
							<tr>
								<th>React/Redux</th>
								<th>RESTful APIs</th>
								<th>Node.js</th>
								<th>ES6</th>
							</tr>
							<tr>
								<th>Anaytics platforms</th>
								<th>TDD Testing</th>
								<th>SCSS</th>
								<th>Mocha, Chai, Sinon</th>
							</tr>
						</tbody>
					</table>

				</CardContent>
			</Card>
			<Paper elevation={1}>
				{jobs}
			</Paper>
		</>
	);
};

export default Resume;
