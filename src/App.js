"use strict";
import React, {useEffect, useRef, useState} from 'react';
import { hot } from 'react-hot-loader';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import response from '../response.json';
import { Octokit } from "@octokit/rest";
import {utilities} from './utilities';
const {collectGistInfo} = utilities;

const App = () => {
	const octokit = new Octokit();
	
	const [gists, setGists] = useState([]);
	const [view, __setView] = useState('home');
	const [message, setMessage] = useState('Choose an option from the menu on the left.');

	const viewRef = useRef(view);
	const setView = currentView => {
		viewRef.current = currentView;
		__setView(currentView);
	};

	const listener = () => {
		console.log(`state in handler: ${viewRef.current}`);
		// state in handler: 1
		// state in handler: 2
		// etc...
	};

	useEffect(() => {
		window.addEventListener('click', listener);
	});

	const publicGists = async () => {
		console.log(1, 'publicGists');
		const publicGs = await octokit.request('GET /gists/public');
		let publicArr = [];
		publicGs.data.forEach(i => {
			return collectGistInfo(i.id)
				.then(data => publicArr.push(data));
		});
		setGists(publicGs.data);
		return;
	};
	
	const myGists = async () => {
		console.log(2, 'myGists');
		const myGs = await octokit.request('GET /gists', {
			headers:{
				Authorization: `token ${process.env.GITHUB_PAT}`
			}
		});
		setGists(myGs.data);
		return;
	};
	
	const createGist = async () => {
		console.log(3, 'createGist');
		const newGist = await octokit.request('POST /gists', {
			headers:{
				Authorization: `token ${process.env.GITHUB_PAT}`
			},
			"public":true,
			"files":{
				"addgist.txt":{
					"content":"This is a cool way to add a gist!"
				}},
		});
		const gI = await collectGistInfo(newGist.data.id);
		console.log('gI:', gI);
		setGists({
			...gists,
			gI
		});
		return;
	};
	
	const handleSearch = async e => {
		console.log(4, 'handleSearch');
		let userName = e.target.value;
		if (!userName) return;
		userName = encodeURI(userName);
		const res = await fetch(`https://api.github.com/users/${userName}/gists`);
		const gistsArray = await res.json();
		setView('list');
		setGists(gistsArray);
		return;
	};
	
	const handleView = async e => {
		console.log('e in handleView:', e);
		setGists([]);
		if((e==='user' || e==='add') && !localStorage.getItem('loggedIn')) {
			setMessage('Please click login to proceed.');
			setView('home');
			return;
		}
		switch(e) {
		case 'home':
			setMessage('Choose an option from the menu on the left.');
			setView('home');
			break;
		case 'public':
			await publicGists();
			setView('list');
			break;
		case 'user':
			await myGists();
			setView('list');
			break;
		case 'add':
			await createGist();
			setView('add');
			break;
		default:
			break;
		}
	};
	
	
	return (
		<>
			<Header />
			<div className="flex-container">
				<Sidebar className="sideBar" onClick={handleView} onChange={handleSearch} />
				<Main view={view} message={message} gists={gists} />
			</div>
		</>
	);
};
	
export default hot(module)(App);
