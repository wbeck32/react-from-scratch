import React, { Fragment, Component } from "react";
import { hot } from 'react-hot-loader'
import "./App.css"
import CssBaseline from '@material-ui/core/CssBaseline';



import MaterialUI from './components/MaterialUI'
class App extends Component {
	render() {
		return (
			<Fragment>
				<CssBaseline />
				<MaterialUI />
			</Fragment>);
	}
}

export default hot(module)(App);