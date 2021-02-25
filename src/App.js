import React,{useState} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import response from '../response.json'

const App = () => {
	
	const [gists,setGists] = useState([])
	const [view,setView] = useState('home')
	
	const publicGists = async e => {
		const res = await fetch(`https://api.github.com/gists/public`);
		let gistsArray = await res.json();
		setView('list')
		setGists(gistsArray)
	}
	
	const handleSearch = async e => {
		let userName = e.target.value;
		if (!userName) return;
		userName = encodeURI(userName);
		const res = await fetch(`https://api.github.com/users/${userName}/gists`);
		let gistsArray = await res.json();
		setView('list')
		setGists(gistsArray)
	}
	
	const handleView = async e =>{
		console.log('e:', e);
		if (e==='public') {
			return await publicGists()
		} 
		setView(e)
	}
	
	return (
		<>
		<div>
		<Header onClick={handleView} onSearch={handleSearch} />
		<Main view={view} gists={gists} />
		<Footer />
		</div>
		</>
		);
	}
	
	export default hot(module)(App);
