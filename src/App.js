import React,{useState} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import response from '../response.json'

const App = () => {
	
	const [gists,setGists] = useState([])
	const [view,setView] = useState('home')
	
	const publicGists = async e => {
		setGists([])
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
		} if (e==='add') {
console.log('adding')

		}else setView(e)
	}
	
	return (
		<>
		<Header onClick={handleView} onSearch={handleSearch} />
		<div className="flex-container">
		<Sidebar className="sideBar" onClick={handleView} onSearch={handleSearch} gists={gists} view={view}/>
		<Main className="main" view={view} gists={gists} />
		</div>
		<Footer />
		</>
		);
	}
	
	export default hot(module)(App);
