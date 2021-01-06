import React from 'react';
import Menu from './Menu';


const Header = props => {
	console.log('props in header:', props);
	return (
		<Menu />
	);
};

export default Header;