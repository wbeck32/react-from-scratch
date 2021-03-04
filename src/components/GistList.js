import React from 'react';
import response from '../../response.json';

const GistList = props => {
	// console.log('props in GistList:', props);
	const {gists, onClick} = props;

	return (
		(gists.length > 0 && 
			gists.map(g => {
				return (<li key={g.id} id={g.id} onClick={g => onClick(g)} className="gist">{g.description ? g.description : g.filename}</li>);		
			})
		)
	);
};
export default GistList;
