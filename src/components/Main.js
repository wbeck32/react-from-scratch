import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";

const Main = props => {
	console.log('props in main:', props);
	const {createGist,gists,view,detail} = props
	
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	const [showDetail, setShowDetail] = useState(detail)
	
	const handleSelect = async g => {
		setShowDetail(false)
		let gistID = g.target.id;
		const gist = await octokit.request(`GET /gists/${gistID}`)
		setGistText(Object.values(gist.data.files)[0].content)
		setShowDetail(true)
	}

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
	(view==='home' &&
	<div>Home</div>
	)
	)
}

export default Main
