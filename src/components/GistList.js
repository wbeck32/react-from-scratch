import React from 'react';
import GistDetail from './GistDetail'

const GistList = props => {
	console.log('props:', props);
	const {gists} = props
	gists.map(g=>{
		return (
			<div style={{border:"2px solid red"}}> 
			<GistDetail gist={g}/>
			</div> 	
			
			)}
			)
			
		}
		export default GistList
