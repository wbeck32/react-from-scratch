import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";
import response from '../../response.json'


const Main = props => {
	console.log('props in main:', props);
	const {message, gists,view} = props
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	
	const handleSelect = async g => {
		let gistID = g.target.id;
		let gistText = ''
		response.forEach(i=>{
			console.log('i:', i);
			if(gistID === i.id) {
				return gistText = Object.values(i.files)[0]
			}
		})
		console.log('gistText:', gistText);
		setGistText(gistText.filename)
		// const gist = await octokit.request(`GET /gists/${gistID}`)
		// const gistInfo = Object.values(gist.data.files)[0]
		// console.log('gistInfo:', gistInfo);
		// if(gistInfo.type === 'text/markdown') {
		// 	const mdToHTML = await octokit.request('POST /markdown',{
		// 		text:gistInfo.content,
		// 		mode:'markdown'
		// 	})
		// 	console.log('mdToHTML:', mdToHTML);
		// 	setGistText(mdToHTML.data)
		// 	return
		// }
		// setGistText(gistInfo.content)
		return
	}
	
	return (
		<div className="main">
		{(view==='list' && !gistText && gists.length > 0) &&
		<ul>
		<GistList onClick={e=>handleSelect(e)} gists={gists}/>
		</ul>
	} 
	{(gistText && gists.length > 0) &&
		<GistDetail gistText={gistText}/>
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
)
}

export default Main
