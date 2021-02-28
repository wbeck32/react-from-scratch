import React from 'react';

const Sidebar = props => {
	const {onSearch,onClick} = props

	return (
		<div className="sideBar">
		<nav>
		<ol>
		<li onClick={e=>{onClick('home')}}>home</li>
		<li onClick={e=>{onClick('public')}}>public gists</li>
		<li onClick={e=>{onClick('add')}}><a href='https://github.com/login/oauth/authorize?client_id=Iv1.585bda12abe86d4b&redirect_uri=http://localhost:3000'>
Login to GitHub to add a gist
</a></li>
		</ol>
		</nav>
      <input placeholder="search for a user" name="searchInput" onChange={onSearch}/>
		</div>
	)
}

export default Sidebar
