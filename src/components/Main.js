import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";

const Main = props => {
	console.log('props in main:', props);
	const {createGist,gists,view} = props
	
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	const [showDetail, setShowDetail] = useState(false)
	
	const handleSelect = async g => {
		let gistID = g.target.id;
		const gist = await octokit.request(`GET /gists/${gistID}`)
		setGistText(Object.values(gist.data.files)[0].content)
		setShowDetail(true)
	}
	
// 	const handleAdd = async () => {
// 		console.log('isLoggedIn:', isLoggedIn);
// 		if(!isLoggedIn) {
// 			console.log('isLoggedIn:', isLoggedIn);
// 			return
// 		} else {
// 			const newGist = await octokit.request('POST /gists', {
// 				headers:{
// 					authorization: process.env.GITHUB_PAT
// 				},
// 				files:{}
// 			});
// 			console.log('newGist:', newGist);
// 	}
// }


return (
	(((view==='public' || view==='user') && !showDetail) &&
	<ul>
	<GistList onClick={e=>handleSelect(e)} gists={gists}/>
	</ul>
	) ||
	(showDetail &&
	<GistDetail gistText={gistText}/>
	) ||
	(view==='add' && 
	<>
	<input name="enterGist" type="textarea"/>
	<input type="submit" onClick={e=>createGist(e)} value="clicky"/>
	</>
	) ||
	(<div>Home</div>)
	)
}

export default Main
