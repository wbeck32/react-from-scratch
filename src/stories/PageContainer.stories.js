import React from 'react'
import PageContainer from '../components/PageContainer'

export default  {
	title:'WendyBeck/Resume',
	component:PageContainer,
	argTypes:{
		theme:{
				description:"Theme color",
				table:{
					type:{
						summary:`light or dark`,
					}
				},
				control:{
					type:'inline-radio',
					options:['light','dark']
				}
		},
		label: {
			description: 'Label',
			table: {
				type: { 
					summary: 'node', 
				},
			},
			control: {
				type: 'text',
			},
		},
	}
	
	
}


const PageContainerTemplate = args => <PageContainer {...args}/>

export const Default = PageContainerTemplate.bind({})
Default.args = {
	theme:'light',
	
}


export const LargeType = PageContainerTemplate.bind({})
LargeType.args= {
	...Default.args
}