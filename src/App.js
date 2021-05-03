"use strict";
import React, {useState} from 'react';
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
	const [view, setView] = useState('home');
	const [message, setMessage] = useState('Choose an option from the menu on the left.');
	
	const publicGists = async () => {
console.log(1, 'publicGists');
		let publicArr = [];
	
		const publicGs = await octokit.request('GET /gists/public',
			{
				headers:{
				Authorization: `token ${process.env.GITHUB_PAT}`
			}});
		publicGs.data.forEach(i => {
			console.log('i:', i);
			return collectGistInfo(i.id)
				.then(item => publicArr.push(item));
		});
		console.log('publicArr:', publicArr);
		setGists(publicArr);
		return;
	};
	
	const myGists = async () => {
		console.log(2, 'myGists');
		let myArr = [];
		const myGs = await octokit.request('GET /gists', {
			headers:{
				Authorization: `token ${process.env.GITHUB_PAT}`
			}
		});
		myGs.data.forEach(i => {
			return collectGistInfo(i.id)
				.then(item => {
					console.log('item:', item);
					myArr.push(item);
				});
		});
		setGists(myArr);
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
		const userGists = await myGists();
		setView('list');
		setGists({
			...userGists,
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
		if((e==='user' || e==='add') && !sessionStorage.getItem('loggedIn')) {
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
