import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

export const utilities = {
	collectGistInfo: async gistID => {
		let gistInfo = {};
		const gist = await octokit.request(`GET /gists/${gistID}`);
		const fileData = Object.entries(gist.data.files)[0];
		
		gistInfo = {
			id:gist.data.id,
			owner:{
				username:gist.data.owner.login,
				profile:gist.data.owner.html_url
			},
			file: {
				fileName:fileData[1].fileName,
				fileType:fileData[1].type,
				content:fileData[1].content
			},
			gistURL: gist.data.html_url
		};

		if(gistInfo.file.type === 'text/markdown') {
			const mdToHTML = await octokit.request('POST /markdown', {
				text:gistInfo.file.content,
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
				gistHtml:gistInfo.file.content
			};
		}
		return gistInfo;
	}
};
