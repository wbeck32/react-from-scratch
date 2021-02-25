/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck
import React from 'react'


const Resources = props => {
	console.log('props:', props);

	return (
		<>
			<h1>Resources</h1>
			<h2>ARIA</h2>
			<ul>
				<li>
W3.org
				</li>
				<li>
					<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles" rel="external" target="_blank">MDN - Accessibility - ARIA - Roles</a>
				</li>


			</ul>
			<h2>Browser Tools</h2>
			<ul>
				<li>
					<a href="https://developers.google.com/web/fundamentals/accessibility" rel="external" target="_blank">Google - Design and User Experience - Accessibility</a>
	
				</li>
				<li>WAVE</li>


			</ul>
			<h2>MacOS</h2>
			<ul>
				<li>
					<a href="https://developer.apple.com/documentation/appkit/accessibility_for_macos/integrating_accessibility_into_your_app">Integrating Accessibility Into Your App</a>
					<p><a href="https://www.example.com">Example</a></p>
				</li>


			</ul>

		</>
	)
}

export default Resources