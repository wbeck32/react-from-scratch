import React,{useState} from 'react';


const GistList = props => {
	const {gists,onClick} = props

	// const handleClick = async g =>{
	// 	console.log('g:', g);
	// 	let gistURL = g.url;
	// 	const res = await fetch(`${gistURL}`,{});
	// 	const response = await res.json();
	// 	console.log('response:', Object.values(response.files)[0].content);
	// 	setGistText(Object.values(response.files)[0].content)
	// }

	return (
		gists.map(g=>{
			return	<div onClick={e=>onClick(g)} className="gist">gist name: {g.description}</div>				
			})
			)
		}
		export default GistList
