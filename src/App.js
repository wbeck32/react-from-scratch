import "./App.css";
import { hot } from 'react-hot-loader';
import React from "react";
import PageContainer from './components/PageContainer';
import { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme()

const App = () => {
	return (
	<ThemeProvider theme={theme}>
	<PageContainer />
	</ThemeProvider>
	);
};

export default hot(module)(App);