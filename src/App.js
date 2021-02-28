import React,{useState,useEffect} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import response from '../response.json'
import { Octokit } from "@octokit/rest";
import { createTokenAuth } from '@octokit/auth-token';


const App = () => {
	const octokit = new Octokit({})

	const [gists,setGists] = useState([])
	const [view,setView] = useState('home')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
	const publicGists = async () => {
		const res = await fetch(`https://api.github.com/gists/public`);
		let gistsArray = await res.json();
		return gistsArray;
	}
	
	const myGists = async () => {
		const myGs = await octokit.gists.list();
		return myGs.data
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
	
	const handleView = async e => {
		console.log('e in handleView:', e);
		if (e==='public') {
			const publicGs = await publicGists()
			setGists(publicGs)
			setView('list')
		} 
		if (e === 'user') {
			console.log('isLoggedIn:', isLoggedIn);
			if(!isLoggedIn) {
				console.log('!isLoggedIn:', !isLoggedIn);


			} else {
				const authenticated = await octokit.request('GET /user')
				console.log('authenticated:', authenticated);
				const userGists = await myGists();
				console.log('userGists:', userGists);
				setGists(userGists)
				setView('list')


			}
		}
		if (e==='add') {
			const code = document.location.search.split('=')[1]
			console.log('code:', code);
			console.log('adding')
		} else setView(e)
	}
	
	const handleLogin = async () => {
		const octokit = new Octokit({
			auth:process.env.GITHUB_PAT,
			baseUrl: 'https://api.github.com',
			log: {
				debug: () => {},
				info: () => {},
				warn: console.warn,
				error: console.error
			},
		});
		setIsLoggedIn(true)
	}

	const handleLogout = async () => {
		const octokit = new Octokit({})
		setIsLoggedIn(false)
	}
	
	return (
		<>
		<Header handleLogin={handleLogin} handleLogout={handleLogout}/>
		<div className="flex-container">
		<Sidebar className="sideBar" onClick={handleView} onSearch={handleSearch} gists={gists} panel={view}/>
		<Main className="main" panel={view} gists={gists} />
		</div>
		<Footer />
		</>
		);
	}
	
	export default hot(module)(App);
