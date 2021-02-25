import React,{useState} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import GistList from './components/GistList'
import GistDetail from './components/GistDetail'
import Footer from './components/Footer'
import response from '../response.json'

const App = ()=> {
	const [gists,setGists] = useState([])
	const [gistText,setGistText] = useState('')

	const handleSelect= async g =>{
		// console.log('g:', g);
		let gistURL = g.url;
		const res = await fetch(`${gistURL}`,{})
		const response = await res.json();
		// console.log('response:', typeof res,Object.values(response.files)[0].content);
		setGistText(Object.values(response.files)[0].content)
	}

  const handleSearch = async e => {
		let userName = e.target.value;
    if (!userName) return;
    userName = encodeURI(userName);
      const res = await fetch(`https://api.github.com/users/${userName}/gists`);
      let gistsArray = await res.json();
			setGists(gistsArray)
  }

		return (
			<div>
			<Header onSearch={handleSearch}/>
			<ul>
			<GistList onClick={e=>handleSelect(e)} gists={gists}/>
			</ul>
			<GistDetail gistText={gistText}/>
			<Footer />
			</div>
		
		);
	}

export default hot(module)(App);
