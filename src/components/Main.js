import React,{useState,useEffect} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import { Octokit } from "@octokit/rest";

const Main = props => {
	const {gists,panel} = props
	
	const octokit = new Octokit();
	
	const [gistText,setGistText] = useState('')
	const [view,setView] = useState(panel)
	
	useEffect(()=>{
		const handleView = view => {
			console.log('view:', view);
			
		}
		return handleView(view)
	},[view])
	
	const handleSelect = async g => {
		let gistID = g.id;
		const gist = await octokit.request(`GET /gists/${gistID}`)
		setGistText(Object.values(gist.data.files)[0].content)
		setView('detail')
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
	(view==='list' &&
	<ul>
	<GistList onClick={e=>handleSelect(e)} gists={gists}/>
	</ul>
	) ||
	(view==='detail' &&
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
