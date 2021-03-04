import React, {useState, useEffect} from 'react';
import GistList from './GistList';
import GistDetail from './GistDetail';
import {utilities} from '../utilities';
import zIndex from '@material-ui/core/styles/zIndex';
const {collectGistInfo} = utilities;

const Main = props => {
	console.log('props in main:', props);
	const {message, gists, view} = props;
	const [gistData, setGistData] = useState();
	const [selectedIndex, setSelectedIndex] = useState();
	const [showDetail, setShowDetail] = useState(false);
	
	const handleSelect = async g => {
		setShowDetail(true);
		const gistIndex = gs => {
			return gs.id === g.target.id;
		};
		let index = gists.findIndex(gistIndex);
		setSelectedIndex(index);
		return; 
	};
	
	return (
		<div className="main">
			{(!showDetail && gists.length > 0) &&
				<ul>
					<GistList onClick={g => handleSelect(g)} gists={gists}/>
				</ul>
			} 
			{(showDetail && gistData) &&
				<GistDetail currentGist={gists[selectedIndex]} gists={gists} />
			} 
			{view==='add' && 
			<>
				<input name="enterGist" type="textarea"/>
				<input type="submit" value="clicky"/>
			</>
			} 
			{view==='home' &&
			<div>{message}</div>
			}
		</div>
	);
};

export default Main;
