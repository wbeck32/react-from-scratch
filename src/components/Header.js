import React from 'react';

const Header = props => {
	const {onSearch,onClick} = props

	return (
		<>
		<div><span onClick={e=>{onClick('home')}}>home</span> || <span onClick={e=>{onClick('public')}}>public gists</span> || <span onClick={e=>{onClick('add')}}>add a gist</span></div>
	  <div>
      <input placeholder="search for a user" name="searchInput" onChange={onSearch}/>
    </div>
		</>
	)
}

export default Header
