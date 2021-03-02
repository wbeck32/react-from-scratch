import React,{useState,useEffect} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import response from '../response.json'
import { Octokit } from "@octokit/rest";


const App = () => {
	const octokit = new Octokit({
		log: {
			debug: () => {},
			info:console.info,
			warn: console.warn,
			error: console.error
		}
	})
	
	const [gists,setGists] = useState([])
	const [view,setView] = useState('home')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [message,setMessage] = useState('')
	const [showDetail, setShowDetail] = useState(false)

	const publicGists = async () => {
		console.log(1, 'publicGists');
		// const publicGs = await octokit.request('GET /gists/public')
		// setGists(publicGs.data)
		setGists(response)
		return
	}
	
	const myGists = async () => {
		console.log(2, 'myGists');
			const myGs = await octokit.request('GET /gists',{
				headers:{
					Authorization: `token ${process.env.GITHUB_PAT}`
				}
			});
			setGists(myGs.data)
			return
		}
	
	const createGist = async () => {
		console.log(3, 'createGist');
			console.log('isLoggedIn 2 - createGist:', isLoggedIn);
			const newGist = await octokit.request('POST /gists',{
				headers: {
					Authorization: `token ${process.env.GITHUB_PAT}`
				},
				files:{},
				
			})
			console.log('newGist:', newGist);
			return
		}
	
	const handleSearch = async e => {
		console.log(4, 'handleSearch');
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
		console.log('isLoggedIn handleView:', isLoggedIn);
		setGists([])
		setView('home')
		setMessage('Choose a menu item.')
		if((e==='user' || e==='add') && !isLoggedIn) {
			console.log('isLoggedIn 1 - createGist:', isLoggedIn);
			setMessage('Please click login to proceed.')
			setView('home')
			return
		}
		switch(e) {
			case 'home':
				setView('home')
				break;
			case 'public':
				await publicGists()
				setView('list')
				break;
			case 'user':
				await myGists();
				setView('list')
				break;
			case 'add':
				await createGist()
				setView('add')
				break;
			default:
				break;
		}
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
		<Sidebar className="sideBar" onClick={handleView} onChange={handleSearch} />
		<Main view={view} message={message} gists={gists} />
		</div>
		</>
		);
	}
	
	export default hot(module)(App);
