import React, {useState} from 'react';

const Header = () => {
	const [text, setText] = useState(`Log in`);

	const handleAuth = async () => {
		const auth = localStorage.getItem('loggedIn');
		!auth ? localStorage.setItem('loggedIn', true) : localStorage.removeItem('loggedIn');
		auth ? setText(`Log in`) : setText(`Log out`);
	};
	
	return (
		<header>
			<button className="button" onClick={handleAuth}>{text}</button>
			{text === `Log out` &&
			<img src="https://avatars.githubusercontent.com/u/2320919?s=60&amp;v=4" alt="@wbeck32" size="40" height="40" width="40" className="avatar-user avatar avatar--small "></img>}
		</header>
	);
};

export default Header;
