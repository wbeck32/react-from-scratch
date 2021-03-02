import React, {useState, useEffect} from 'react';
import GistList from './GistList';
import GistDetail from './GistDetail';
import { Octokit } from "@octokit/rest";
import response from '../../response.json';

const Main = props => {
	console.log('props in main:', props);
	const {message, gists, view} = props;
	const octokit = new Octokit();
	
	const [gistData, setGistData] = useState();
	const [showDetail, setShowDetail] = useState(false);
	
	const handleSelect = async g => {
		console.log('g:', g);
		let gistID = g.target.id;
		let gistInfo = {};
		// response.forEach(i=>{
		// 	console.log('i:', i);
		// 	if(gistID === i.id) {
		// 		return gistInfo = {
		// 			gistText: Object.values(i.files)[0],
		// 			gistOwner:i.owner,
		// 			gistURL: i.html_url
		// 		}
		// 	}})
		// const gist = await octokit.request(`GET /gists/${gistID}`);
		
		gistInfo = {
		// 	gistHtml:'',
			gistID,
		// 	gistText: Object.values(gist.data.files)[0],
		// 	gistOwner:gist.data.owner,
		// 	gistURL: gist.data.html_url
		};

		// if(gistInfo.gistText.type === 'text/markdown') {
		// 	const mdToHTML = await octokit.request('POST /markdown', {
		// 		text:gistInfo.gistText.content,
		// 		mode:'markdown'
		// 	});
		// 	setGistData({...gistInfo, gistHtml:mdToHTML.data});
		// 	return;
		// } else {
		setGistData({...gistInfo});
		// }
		setShowDetail(true);
		return;
	};
	
	return (
		<div className="main">
			{!showDetail  &&
				<ul>
					<GistList onClick={e => handleSelect(e)} gists={gists}/>
				</ul>
			} 
			{showDetail &&
				<GistDetail showDetail={showDetail} gistData={gistData} gists={gists} />
			} 
			{view==='add' && 
			<>
				<input name="enterGist" type="textarea"/>
				<input type="submit" value="clicky"/>
			</>
			} 
			{view==='home' &&
			<div>{message}</div>
			}
		</div>
	);
};

export default Main;
