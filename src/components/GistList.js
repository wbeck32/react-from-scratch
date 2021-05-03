import React from 'react';
import response from '../../response.json';

const GistList = props => {
	console.log('props in GistList:', props);
	const {gists, onClick} = props;

	return (
		(gists.length > 0 && 
			gists.map(g => {
				// console.log('g:', g);
				return (<li key={g.id} id={g.id} onClick={g => onClick(g)} className="gist">{g.file.filename}</li>);		
			})
		)
	);
};
export default GistList;
