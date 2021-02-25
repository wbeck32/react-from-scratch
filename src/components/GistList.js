import React from 'react';
import GistDetail from './GistDetail'

const GistList = props => {
	const {gists} = props
	const handleClick = e =>{
console.log(123,e)

	}
	return (
		gists.map(g=>{
			return (
				<>
				<div class="gist">gist name: {g.description}</div>

			
			<GistDetail className="gist" onClick={handleClick} gist={g}/>
			</>
			
			)		
		})
	)
}
	export default GistList
