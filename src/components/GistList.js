import React,{useState} from 'react';


const GistList = props => {
	const {gists,onClick} = props

	return ((gists.message !=="Not Found" &&
		gists.map(g=>{
		return	<li><div onClick={e=>onClick(g)} className="gist">{g.description}</div></li>		
			})
			))
		}
		export default GistList
