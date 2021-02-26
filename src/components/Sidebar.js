import React from 'react';

const Sidebar = props => {
	const {onSearch,onClick} = props

	return (
		<div>
		<nav>
		<ol>
		<li onClick={e=>{onClick('home')}}>home</li>
		<li onClick={e=>{onClick('public')}}>public gists</li>
		<li onClick={e=>{onClick('add')}}>add a gist</li>
		</ol>
		</nav>
      <input placeholder="search for a user" name="searchInput" onChange={onSearch}/>
		</div>
	)
}

export default Sidebar
