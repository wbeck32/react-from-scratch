import React from 'react';
import {Card} from '@material-ui/core'


const Header = props => {
	const {onSearch} = props

	return (
	  <div>
      <input placeholder="search for a user" name="searchInput" onChange={onSearch}/>
    </div>
	)
}

export default Header
