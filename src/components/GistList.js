import React from 'react';

const GistList = props => {
	console.log('props in GistList:', props);
	const {gists,onClick} = props

	return (
		gists.map(g=>{
		return (<li key={g.id} id={g.id} onClick={g=>onClick(g)} className="gist">{g.description}</li>)		
			})
			)
		}
		export default GistList
