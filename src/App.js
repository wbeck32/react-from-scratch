import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { hot } from 'react-hot-loader'
import "./App.css"
import PageContainer from './components/PageContainer'


const App =props=> {
	console.log('props:', props);
		return (
			<PageContainer>
		<Router>
<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/storybook">Storybook</Link>
            </li>
            <li>
              <Link to="/lighthouse">Lighthouse report</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/storybook">
            <PageContainer name="storybook" />
          </Route>
          <Route path="/lighthouse">
            <PageContainer name="lighthouse" />
          </Route>
          <Route path="/">
            <PageContainer name="resume" />
          </Route>
        </Switch>
      </div>


		</Router>
		
		</PageContainer>
		
		
		);
}

export default hot(module)(App);