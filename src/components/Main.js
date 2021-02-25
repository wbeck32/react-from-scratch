import React,{useState} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'

const Main = props => {
	console.log('props:', props);
	const {gists,view} = props
	
	const [gistText,setGistText] = useState('')
	
	const handleSelect= async g =>{
		let gistURL = g.url;
		const res = await fetch(`${gistURL}`,{})
		const response = await res.json();
		setGistText(Object.values(response.files)[0].content)
	}

	const handleAdd = e => {
		console.log('e in add:', e);

		
	}
	
	return (
		<>
		{view==='list' &&
		<>
		<ul>
		<GistList onClick={e=>handleSelect(e)} gists={gists}/>
		</ul>
		<GistDetail gistText={gistText}/>
		</>
		}
		{view==='add' && 
			<div onClick={e=>handleAdd(e)}>clicky</div>
		}
		</>
		)
	}
	
	export default Main
