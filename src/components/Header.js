import React from 'react';

const Header = props => {
const {handleLogin,handleLogout} = props
	
	return (
<header>
<button onClick={handleLogin}>Login</button>
<button onClick={handleLogout}>Logout</button>
</header>
	)
}

export default Header
