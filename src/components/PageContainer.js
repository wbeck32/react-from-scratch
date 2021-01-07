import Footer from './Footer'
import Header from './Header';
import React from 'react';


const PageContainer = props => {
	console.log('props in page container: ', props);
	return <><Header /><Footer/></>
};

export default PageContainer;