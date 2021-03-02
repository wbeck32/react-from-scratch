import React from 'react';

const GistDetail = props => {
	console.log('props in GistDetail:', props);
	const {gistText} = props
	const html = {__html: gistText}	
	
	return (
		<div dangerouslySetInnerHTML={html} className="gistDetail"/>
		)
	}
	export default GistDetail
