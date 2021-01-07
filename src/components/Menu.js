import React from 'react'
import {
	NavLink,
	Route,
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import {Breadcrumbs} from '@material-ui/core'
import Lighthouse from './Lighthouse'
import Resources from './Resources'
import Resume from './Resume'
import Storybook from './Storybook'


const Menu = props => {
	console.log('props in menu:', props);
	return (
		<Router>
			<Breadcrumbs aria-label="breadcrumb">
				<nav>
					<ul>
						<li key={Math.random().toFixed(5)}>
							<NavLink to="/">Home</NavLink>
						</li>
						<li key={Math.random().toFixed(5)}>
							<NavLink to="/storybook">Storybook</NavLink>
						</li>
						<li key={Math.random().toFixed(5)}>
							<NavLink to="/lighthouse">Lighthouse report</NavLink>
						</li>
						<li key={Math.random().toFixed(5)}>
							<NavLink to="/resources">Resources</NavLink>
						</li>
					</ul>
				</nav>
			</Breadcrumbs>
			<Switch>
				<Route key={Math.random().toFixed(5)} exact path="/" component={Resume}/>
				<Route key={Math.random().toFixed(5)} path="/storybook" component={Storybook}/>
				<Route key={Math.random().toFixed(5)} path="/lighthouse" component={Lighthouse}/>
				<Route key={Math.random().toFixed(5)} path="/resources" component={Resources}/>
		
			</Switch>
		</Router>
	)
}
	
export default Menu