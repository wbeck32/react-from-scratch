import React from 'react';
import Header from './Header';


const PageContainer = props => {
	console.log('props in page container: ', props);
	return (
		<div>
		<Header/>
		</div>
		);
	};
	
	export default PageContainer;