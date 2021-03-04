import React, {useEffect, useReducer, useState} from 'react';

const reducer = (state, action) => {
	switch(action.type) {
	case 'next':
		return {index:state.index + 1};
	case 'prev':
		return {index:state.index - 1};
	}
};

const GistDetail = props => {
	// console.log('props in GistDetail:', props);
	const {gistData, gists} = props;
	const [gistID, setGistID] = useState(gistData.gistID);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentGist, setCurrentGist] = useState(gistData);
	const initialIndex = {index:gistData.index};
	const [state, dispatch] = useReducer(reducer, initialIndex);
	const [error, setError] = useState();
	
	useEffect(() => {
		fetch(`https://api.github.com/gists/${gistID}`)
			.then(res => res.json())
			.then(
				(result) => {	
					console.log('result:', result);
					setIsLoaded(true);
					const fileData = Object.entries(result.files)[0];
					console.log('fileData:', fileData);
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
							content:fileData[1].content,
							description:result.description
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
					console.log('gistData:', gistData);
					setCurrentGist(gistData);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, [gistID, gists]);
				
				
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {			
		return (
			<>
				<div onClick={() => dispatch({type:'next'})}>next</div>
				<a href="https://localhost:3000">home</a>
				<div onClick={() => dispatch({type:'prev'})}>previous</div>
				<div className="gistDetail">{sy}</div> 
			</>
		);
	}
};
export default GistDetail;
