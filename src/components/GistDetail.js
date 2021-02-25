import React from 'react';

const GistDetail = props => {
const {gistText} = props	
	return (
	<div className="gistDetail">{gistText}</div>
	)
}
export default GistDetail
