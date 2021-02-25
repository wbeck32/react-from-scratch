import React,{useState} from 'react';
import { hot } from 'react-hot-loader'
import "./App.css"
import Header from './components/Header'
import GistList from './components/GistList'
import Footer from './components/Footer'
import response from '../response.json'


const App = ()=> {
	const [gists,setGists] = useState([])

  const handleSearch = async e => {
		let userName = e.target.value;
    if (!userName) return;
    userName = encodeURI(userName);
    // debounce - slow down requests
    // for (let i = 0; i <= 5; i++) {
      const res = await fetch(
        `https://api.github.com/users/${userName}/gists`
      );
      let gistsArray = await res.json();
			setGists(gistsArray)
  }

		return (
			<div>
			<Header onSearch={handleSearch}/>
			<GistList style={{border:'3px solid blue'}} gists={response}/>
			<Footer />
			</div>
		
		);
	}

export default hot(module)(App);
