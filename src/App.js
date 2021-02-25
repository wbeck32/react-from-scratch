import React,{useState} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import GistList from './components/GistList'
import GistDetail from './components/GistDetail'
import Footer from './components/Footer'
import response from '../response.json'


const App = ()=> {
	const [gists,setGists] = useState(response)
	const [gistText,setGistText] = useState('')

	const handleSelect= async g =>{
		console.log('g:', g);
		let gistURL = g.url;
		// let gistURL = `https://gist.github.com/wbeck32/06ab451ae51f0667b6cea46f3f1b657c.js`
		const res = await fetch(`${gistURL}`,{});
		// console.log('res:', res.text());
		const response = await res.json();
		// console.log('response:', response);
		console.log('response:', Object.values(response.files)[0].content);
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
			<GistList style={{border:'3px solid blue'}} onClick={e=>handleSelect(e)} gists={response}/>
			<GistDetail gistText={gistText}/>
			<Footer />
			</div>
		
		);
	}

export default hot(module)(App);
