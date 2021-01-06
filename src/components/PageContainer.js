import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';


const PageContainer = props => {
	console.log('props in page container: ', props);
	return (
		<div>
		<Header/>
		</div>
		);
		
	};
	
	export default PageContainer;