import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const PageContainer = () => {
	const pageContainerStyle = {
		height: '.25vh',
		border: '2px solid pink'
	}
	return (
		<div style={pageContainerStyle}><Header /><Main /><Footer /></div>
	)

}

export default PageContainer
