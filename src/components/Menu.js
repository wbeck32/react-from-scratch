import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";
import Main from './Main'
import Storybook from './Storybook'
import Lighthouse from './Lighthouse'



const Menu = props => {
	  console.log('props in menu:', props);
return (

<Router>
	<div>
		<nav>
		<ul>
		<li>
		<NavLink to="/">Home</NavLink>
		</li>
		<li>
		<NavLink to="/storybook">Storybook</NavLink>
		</li>
		<li>
		<NavLink to="/lighthouse">Lighthouse report</NavLink>
		</li>
		</ul>
		</nav>
		</div>

		<Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/storybook" component={Storybook}/>
          <Route path="/lighthouse" component={Lighthouse}/>
        </Switch>
		</Router>
	)
}

export default Menu