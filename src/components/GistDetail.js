import React from 'react';


const GistDetail = gist => {
	console.log('gist:', gist);
	return <div>{gist.description}</div>
}
export default GistDetail
