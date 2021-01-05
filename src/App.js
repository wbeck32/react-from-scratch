import "./App.css"

import {
	Link,
	Route,
	BrowserRouter as Router,
	Switch
} from "react-router-dom";

import PageContainer from './components/PageContainer'
import React from "react";
import { hot } from 'react-hot-loader'

const App =props=> {
	console.log('props in App.js:', props);
	return (
		<PageContainer>
		<Router>
		<div>
		<nav>
		<ul>
		<li>
		<Link to="/">Home</Link>
		</li>
		<li>
		<Link to="/storybook">Storybook</Link>
		</li>
		<li>
		<Link to="/lighthouse">Lighthouse report</Link>
		</li>
		</ul>
		</nav>
		
		<Switch>
		<Route path="/storybook">
		<PageContainer name="storybook" />
		</Route>
		<Route path="/lighthouse">
		<PageContainer name="lighthouse" />
		</Route>
		<Route path="/">
		<PageContainer name="resume" />
		</Route>
		</Switch>
		</div>
		
		
		</Router>
		
		</PageContainer>
		
		
		);
	}
	
	export default hot(module)(App);