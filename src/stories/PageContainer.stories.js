import React from 'react'
import PageContainer from '../components/PageContainer'

export default  {
title:'WendyBeck/Resume',
component:PageContainer


}


const PageContainerTemplate = args => <PageContainer {...args}/>

export const Default = PageContainerTemplate.bind({})
Default.args = {


}