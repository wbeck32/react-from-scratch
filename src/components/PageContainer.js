import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import React from 'react';

const PageContainer = props => {
	console.log('props: ', props);
	return (
		<>
		<Header />
		<Main />
		<Footer />
		</>
	)

}

export default PageContainer