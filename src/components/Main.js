import React, {useState, useEffect} from 'react';
import GistList from './GistList';
import GistDetail from './GistDetail';
import response from '../../response.json';
import {utilities} from '../utilities';
const {collectGistInfo} = utilities;

const Main = props => {
	console.log('props in main:', props);
	const {message, gists, view} = props;
	
	const [gistData, setGistData] = useState(0);
	const [showDetail, setShowDetail] = useState(false);
	
	const handleSelect = async g => {
		setShowDetail(true);
		const gI = await collectGistInfo(g.target.id);
		setGistData(gI);
		return; 
	};
	
	return (
		<div className="main">
			{!showDetail  &&
				<ul>
					<GistList onClick={g => handleSelect(g)} gists={gists}/>
				</ul>
			} 
			{(showDetail && gistData) &&
				<GistDetail showDetail={showDetail} gistData={gistData} gists={gists} />
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
