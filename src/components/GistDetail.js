import React, {useEffect, useState} from 'react';
import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

const GistDetail = props => {
	// console.log('props in GistDetail:', props);
	const {gistData, gists} = props;
	const [gistID, setGistID] = useState(gistData.gistID);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentGist, setCurrentGist] = useState(gistData);
	const [index, setIndex] = useState(gistData.index);
	const [error, setError] = useState();
	let html = {__html: gistData.gistHtml};

	useEffect(() => {
		fetch(`https://api.github.com/gists/${gistID}`)
			.then(res => res.json())
			.then(
				(result) => {	
					console.log('result:', result);
					setIsLoaded(true);
					const fileData = Object.entries(result.files)[0];
					const gistIndex = gs => {
						return gs.id === result.id;
					};
					let index = gists.findIndex(gistIndex);
					let gistData = {
						id:result.id,
						index,
						owner:{
							username:result.owner.login,
							profile:result.owner.html_url
						},
						file: {
							fileName:fileData[1].fileName,
							fileType:fileData[1].type,
							content:fileData[1].content
						},
						gistURL:result.html_url
					};
					if(gistData.file.fileType === 'text/markdown') {
						fetch(`https://api.github.com/markdown`, {
							text:gistData.file.content
						})
							.then(res => res.json())
							.then((r) => {
								gistData = {
									...gistData,
									file:{
										content:r
									}
								};
							});
					}
					setCurrentGist(gistData);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, [gistID]);
				
	const updateGistID = e => {					
		const direction = e.target.innerText;
		let newIndex = 0;
		direction === 'next' ? newIndex = index + 1 : newIndex = index - 1;
		console.log('index:', index);
		console.log('newIndex:', newIndex);
		const newGist = gists[newIndex];
		console.log('newGist:', newGist);
		const gID = newGist.id;
		setGistID(gID);
		setIndex(newIndex);
		return;
	};
				
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {			
		return (
			<>
				<div onClick={updateGistID}>next</div>
				<a href="https://localhost:3000">home</a>
				<div onClick={updateGistID}>previous</div>
				<div className="gistDetail">{currentGist.file.content}</div> 
			</>
		);
	}
};
export default GistDetail;
