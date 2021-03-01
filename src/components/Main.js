import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";

const Main = props => {
	console.log('props in main:', props);
	const {gists,view} = props
	
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	const [showDetail, setShowDetail] = useState(false)
	
	const handleSelect = async g => {
		let gistID = g.id;
		const gist = await octokit.request(`GET /gists/${gistID}`)
		setGistText(Object.values(gist.data.files)[0].content)
		setShowDetail(true)
	}
	
	const handleAdd = e => {
		console.log('e in add:', e);
		fetch('https://api.github.com/gists',{
		method:'post',
		body:{}
	})
	.then(res => console.log(res))
}

return (
	((view==='list' && !showDetail) &&
	<ul>
	<GistList onClick={e=>handleSelect(e)} gists={gists}/>
	</ul>
	) ||
	(showDetail &&
	<GistDetail gistText={gistText}/>
	) ||
	(view==='add' && 
	<>
	<input name="enterGist" type="text"/>
	<input type="submit" onClick={e=>handleAdd(e)} value="clicky"/>
	</>
	) ||
	(<div>Home</div>)
	)
}

export default Main
