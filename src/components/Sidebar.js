import React from 'react';

const Sidebar = props => {
	const {onChange, onClick} = props;

	return (
		<div className="sideBar">
			<nav>
				<ol>
					<li onClick={e => {onClick('home');}}>home</li>
					<li onClick={e => {onClick('public');}}>public gists</li>
					<li onClick={e => {onClick('user');}}>my gists</li>
					<li onClick={e => {onClick('add');}}>add a gist</li>
				</ol>
			</nav>
			<input placeholder="search for a user" name="searchInput" onChange={onChange}/>
		</div>
	);
};

export default Sidebar;
