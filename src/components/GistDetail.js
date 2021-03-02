import React, {useEffect, useState} from 'react';
import {utilities} from '../utilities';
import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

const GistDetail = props => {
	console.log('props in GistDetail:', props);
	const {gistData, gists, showDetail} = props;
	const [gistID, setGistID] = useState(gistData.gistID);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentGist, setCurrentGist] = useState({});
	const [error, setError] = useState();
	const {collectGistInfo} = utilities;
	let html = {__html: gistData.gistHtml};

	useEffect(() => {
		fetch(`https://api.github.com/gists/${gistID}`)
			.then(res => res.json())
			.then(
				(result) => {
					
					setIsLoaded(true);
					setCurrentGist(result);
					console.log('result:', result, isLoaded, currentGist);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					console.log('error:', error);
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	// if (error) {
	// 	console.log('error:', error);
	// 	return <div>Error: {error.message}</div>;
	// } else if (!isLoaded) {
	// 	return <div>Loading...</div>;
	// } else {
	return (
		<div>boyHowdy</div>
	);
};
		
//  <ul>
// 	{currentGist.map(item => (
// 		<li key={item.id}>
// 			{item.name} {item.price}
// 		</li>
// 	))}
// </ul> 
		
// const createGistData = async gist => {
// 	const direction = gist.target.innerText;
// 	let newIndex = 0;
// 	const gistIndex = gs => {
// 		return gs.id === gist.target.id;
// 	};
// 	let thisIndex = gists.findIndex(gistIndex);
// 	direction === 'next' ? newIndex = thisIndex + 1 : newIndex =thisIndex - 1;
// 	console.log('thisIndex:', thisIndex);
// 	console.log('newIndex:', newIndex);
// 	const newGist = gists[newIndex];
// 	const gistID = newGist.id;
// 	const gistInfo = await collectGistInfo(gistID);
// 	console.log('gistInfo in detail:', gistInfo);
// 	html = {__html: gistInfo.gistHtml};
// 	return; 
// };
	
// return (
// 	(showDetail &&
// 		<>
// 			<div onClick={createGistData} id={gistData.gistID}>next</div>
// 			<div onClick={createGistData}>home</div>
// 			<div onClick={createGistData} id={gistData.gistID}>previous</div>
// 			<div dangerouslySetInnerHTML={html} className="gistDetail"/> 
// 		</>
// 	)
// );
export default GistDetail;
