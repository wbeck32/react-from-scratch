import "./App.css";
import { hot } from 'react-hot-loader';
import React from "react";
import PageContainer from './components/PageContainer';

const App = props => {
	return <PageContainer />;
};

export default hot(module)(App);