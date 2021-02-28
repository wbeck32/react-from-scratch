import React from 'react';

const Header = props => {

	const handleAuth = () => {
		// var myHeaders = new Headers();
		// myHeaders.append("Authorization", "Bearer af671abd6d3d9754b1c6651a8912200ca6c00d57");
		// myHeaders.append("Cookie", "_device_id=17be3af15ac259335f3343f545cb7706; _gh_sess=Estna0LZ0ZQsv7xjjSzf7wYNVoW8dKaRVoahXmJ0kIuVpvpS6jUWvI69qRVJKFyutXmQLRXGaHJxrZmz45Y9tNr8hVOajo3Xv1opvVZkh97u2V2vVeKklorGkXW0q%2FLEQuXPJzFraF5G8Su%2Bc%2BoXFd3C5j4be%2B%2Bic3Gdcx3ExbOmtVQEUGuv3ofEOB7EbsyWUsjug6LgM7KVbObkDoMRSG92BPYHIWSy2wuo5A%2BNcKCeFykXra7efnn2hpi9bLsWYjrN8AIerpPseEvvQZv%2BPQ%3D%3D--v256HKc5urzMKC%2Bl--vGinW11%2FAu0IHZGMCwzJ9Q%3D%3D; _octo=GH1.1.1678247164.1614276363; logged_in=no");
		
		var requestOptions = {
			method: 'POST',
			redirect: 'follow'
		};
		
		fetch("https://github.com/login/oauth/authorize?client_id=Iv1.585bda12abe86d4b&redirect_uri=http://localhost:3000", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));


	}
	return (
<header>
<a href='https://github.com/login/oauth/authorize?client_id=Iv1.585bda12abe86d4b&redirect_uri=http://localhost:3000'>
Login to GitHub to add a gist
</a>
</header>
	)
}

export default Header
