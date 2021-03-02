import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

export const utilities = {
	collectGistInfo: async gistID => {
		console.log('gistID:', gistID);
		let gistInfo = {};
		const gist = await octokit.request(`GET /gists/${gistID}`, {
			headers:{
				Authorization: `token ${process.env.GITHUB_PAT}`
			}
		});

		gistInfo = {
			gistHtml:'',
			gistID,
			gistText: Object.values(gist.data.files)[0],
			gistOwner:{
				name: gist.data.owner.login,
				URL:gist.data.owner.url
			},
			gistURL: gist.data.html_url
		};

		if(gistInfo.gistText.type === 'text/markdown') {
			const mdToHTML = await octokit.request('POST /markdown', {
				text:gistInfo.gistText.content,
				mode:'markdown'
			});
			gistInfo = {
				...gistInfo, 
				gistHtml:mdToHTML.data
			};
			return gistInfo;
		} else {
			gistInfo = {
				...gistInfo, 
				gistHtml:gistInfo.gistText.content
			};
		}
		console.log('gistInfo in util:', gistInfo);
		return gistInfo;
	}
};
