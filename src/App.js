import "./App.css"
import { hot } from 'react-hot-loader'
import Header from './components/Header'
import Footer from './components/Footer'
import React from "react";
import PageContainer from './components/PageContainer'

const App =props=> {
	console.log('props in App.js:', props);
	return (
		<>
		<PageContainer/>
	</>
		
		);
	}
	
	export default hot(module)(App);