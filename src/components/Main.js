import React,{useState} from 'react'
import GistList from './GistList'
import GistDetail from './GistDetail'

const Main = props => {
	const decoder = new TextDecoder('utf-8')
	
	const {gists,view} = props
	const [gistText,setGistText] = useState('')
	const [showDetail, setShowDetail] = useState(false)
	
	
	const handleSelect= async g =>{
		let charsReceived = 0
		let result = ''
		
		console.log('g:', g.url);
		let gistURL = g.url;
		const res = await fetch(`${gistURL}`,{})
		const json = await res.json()
		console.log('json:', json);
		// const fileURL = Object.entries(json.files)[0]
		// console.log('fileURL:', fileURL);
		// 		const reader = await res.body.getReader()
		// 		return reader.read()
		// 		.then(({value,done})=>{
		// 			result = decoder.decode(value)
		
		// 			if (done) {
		// 				console.log('Stream finished. Content received:')
		// 				console.log(result)
		// 				return
		// 			}
		// 			result += value
		// 			console.log('result:', result,typeof result)
		// return
		
		
		// 		})
		// console.log('r:', r.value.toString());
		// const response = await res.json();
		// console.log('response:', response);
		// setShowDetail(true)
		// setGistText(Object.values(response.files)[0].content)
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
	(showDetail &&
		<GistDetail gistText={gistText}/>
		) ||
		(view==='add' && 
		<>
		<input name="enterGist" type="text"/>
		<input type="submit" onClick={e=>handleAdd(e)} value="clicky"/>
		</>
		)
		)
	}
	
	export default Main
