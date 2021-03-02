import React from 'react';
import {utilities} from '../utilities';

const GistDetail = props => {
	const {gistData, gists, showDetail} = props;
	const {collectGistInfo} = utilities;
	let html = {__html: gistData.gistHtml};
	
	const createGistData = async gist => {
		const direction = gist.target.innerText;
		let newIndex = 0;
		const gistIndex = gs => {
			return gs.id === gist.target.id;
		};
		let thisIndex = gists.findIndex(gistIndex);
		direction === 'next' ? newIndex = thisIndex + 1 : newIndex =thisIndex - 1;
		console.log('thisIndex:', thisIndex);
		console.log('newIndex:', newIndex);
		const newGist = gists[newIndex];
		const gistID = newGist.id;
		const gistInfo = await collectGistInfo(gistID);
		console.log('gistInfo in detail:', gistInfo);
		return html = {__html: gistInfo.gistHtml};
	};
	
	return (
		(showDetail &&
			<>
				<div onClick={createGistData} id={gistData.gistID}>next</div>
				<div onClick={createGistData}>home</div>
				<div onClick={createGistData} id={gistData.gistID}>previous</div>
				<div dangerouslySetInnerHTML={html} className="gistDetail"/> 
			</>
		)
	);
};
export default GistDetail;
