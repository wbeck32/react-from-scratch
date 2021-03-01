import React,{useState,useEffect} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { Octokit } from "@octokit/rest";


const App = () => {
	const octokit = new Octokit({
		log: {
			debug: () => {},
			info: () => {},
			warn: console.warn,
			error: console.error
		}
	})
	
	const [gists,setGists] = useState([])
	const [view,setView] = useState('home')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
	const publicGists = async () => {
		const publicGs = await octokit.request('GET /gists/public')
		await setGists(publicGs.data)
		return
	}
	
	const myGists = async () => {
		if(!isLoggedIn) {
			console.log('isLoggedIn:', isLoggedIn);
			return
		} else {
			const myGs = await octokit.request('GET /gists',{
				headers:{
					Authorization: `token ${process.env.GITHUB_PAT}`
				}
			});
			setGists(myGs.data)
		}
		return
	}
	
	const createGist = async () => {
		console.log('isLoggedIn:', isLoggedIn);
		if(!isLoggedIn) {
			console.log('isLoggedIn - create:', isLoggedIn);
			return
		} else {
			const newGist = await octokit.request('POST /gists',{
				headers:{
					Authorization: `token ${process.env.GITHUB_PAT}`
				},
				files:{},
				
			})
			console.log('newGist:', newGist);
		}
	}
	
	const handleSearch = async e => {
		let userName = e.target.value;
		if (!userName) return;
		userName = encodeURI(userName);
		const res = await fetch(`https://api.github.com/users/${userName}/gists`);
		let gistsArray = await res.json();
		setView('list')
		setGists(gistsArray)
		return
	}
	
	const handleView = async e => {
		console.log('e in handleView:', e);
		if (e==='public') {
			await publicGists()
			setView('list')
		} 
		if (e === 'user') {
			await myGists();
			setView('list')
		}
		if (e==='add') {
			setView('add')
			
		} else setView(e)
		return
	}
	
	const handleLogin = async () => {
		setIsLoggedIn(true)
	}
	
	const handleLogout = async () => {
		setIsLoggedIn(false)
	}
	
	return (
		<>
		<Header handleLogin={handleLogin} handleLogout={handleLogout}/>
		<div className="flex-container">
		<Sidebar className="sideBar" onClick={handleView} onChange={handleSearch} gists={gists} />
		<Main className="main" view={view} createGist={createGist} gists={gists} />
		</div>
		<Footer />
		</>
		);
	}
	
	export default hot(module)(App);
