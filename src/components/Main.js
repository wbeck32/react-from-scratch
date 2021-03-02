import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";

const Main = props => {
	console.log('props in main:', props);
	const {message, gists,view} = props
	
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	const [showDetail, setShowDetail] = useState(false)
	
	const handleSelect = async g => {
		setShowDetail(false)
		let gistID = g.target.id;
		const gist = await octokit.request(`GET /gists/${gistID}`)
		const gistInfo = Object.values(gist.data.files)[0]
		console.log('gistInfo:', gistInfo);
		if(gistInfo.type === 'text/markdown') {
			const mdToHTML = await octokit.request('POST /markdown',{
				text:gistInfo.content,
				mode:'markdown'
			})
			console.log('mdToHTML:', mdToHTML);
			setGistText(mdToHTML.data)
			setShowDetail(true)
			return
		}
		setGistText(gistInfo.content)
		setShowDetail(true)
		return
	}
	
	return (
		<div className="main">
		{view==='list' && !showDetail &&
		<ul>
		<GistList onClick={e=>handleSelect(e)} gists={gists}/>
		</ul>
	} 
	{showDetail &&
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
