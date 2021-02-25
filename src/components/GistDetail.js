import React from 'react';

const GistDetail = props => {
	const {gist,onClick} = props
	
	return (
		<>
	<div onClick={e=>onClick(gist.html_url)} className="gistDetail">text: {gist.html_url}</div>
	</>
	)
}
export default GistDetail
