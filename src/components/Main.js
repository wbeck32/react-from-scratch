import React, {useState, useEffect} from 'react';
import GistList from './GistList';
import GistDetail from './GistDetail';
import {utilities} from '../utilities';
const {collectGistInfo} = utilities;

const Main = props => {
	console.log('props in main:', props);
	const {message, gists, view} = props;
	
	const [gistData, setGistData] = useState();
	const [showDetail, setShowDetail] = useState(false);
	
	const handleSelect = async g => {
		console.log('g:', g);
		setShowDetail(true);
		const gI = await collectGistInfo(g.target.id);
		const gistIndex = gs => {
			return gs.id === g.target.id;
		};
		let index = gists.findIndex(gistIndex);
		setGistData({...gI, index});
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
				<GistDetail gistData={gistData} gists={gists} />
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
