import React,{useState} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'
import Sidebar from './Sidebar'

const Main = props => {
	const {gists,view} = props
	
	const [gistText,setGistText] = useState('')
	
	const handleSelect= async g => {
		let gistURL = g.url;
		const res = await fetch(`${gistURL}`,{})
		const response = await res.json();
		setGistText(Object.values(response.files)[0].content)
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
<>
<input name="enterGist" type="text"/>
<input type="submit" onClick={handleAdd} value="clicky"/>
</>
}
</>
)
}

export default Main
