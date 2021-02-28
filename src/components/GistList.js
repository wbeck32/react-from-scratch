import React from 'react';

const GistList = props => {
	console.log('props in gist list:', props);
	const {gists,onClick} = props

	return ((gists.message !=="Not Found" &&
		gists.map(g=>{
		return (<li key={g.id} onClick={g=>onClick(g)} className="gist">{g.description}</li>)		
			})
			))
		}
		export default GistList
