import React from 'react';
import { crlf, chkcrlf, lineSplit, LF, CRLF, CR } from 'crlf-normalize';
// var crlfNormalize = require("crlf-normalize");
var eol = require("eol");

const Test = () => {
	let sy = {
		"id": "4c8fe26dbeeeca181feab8dba31adbb6",
		"owner": {
			"username": "KnightAsterial",
			"profile": "https://github.com/KnightAsterial"
		},
		"file": {
			"fileName": "simple-state-api-demo.js",
			"fileType": "application/javascript",
			"content": "import axios from \"axios\";\nimport React from \"react\";\nimport \"./App.css\";\n\nexport default function App() {\n  const [imgURL, setImgURL] = React.useState(\"\");\n\n  async function fetchData() {\n    let response = await axios.get(\"https://dog.ceo/api/breed/pomeranian/images/random\");\n    setImgURL(response.data.message);\n    console.log(response.data.message);\n  }\n\n  React.useEffect(() => {fetchData()}, []);\n\n  return (\n    <div className=\"App\">\n      <h1>Returned {imgURL}</h1>\n      <img src={imgURL} alt=\"doggo\" />\n    </div>\n  );\n}"
		},
		"gistURL": "https://gist.github.com/4c8fe26dbeeeca181feab8dba31adbb6",
		"gistHtml": "import axios from \"axios\";\nimport React from \"react\";\nimport \"./App.css\";\n\nexport default function App() {\n  const [imgURL, setImgURL] = React.useState(\"\");\n\n  async function fetchData() {\n    let response = await axios.get(\"https://dog.ceo/api/breed/pomeranian/images/random\");\n    setImgURL(response.data.message);\n    console.log(response.data.message);\n  }\n\n  React.useEffect(() => {fetchData()}, []);\n\n  return (\n    <div className=\"App\">\n      <h1>Returned {imgURL}</h1>\n      <img src={imgURL} alt=\"doggo\" />\n    </div>\n  );\n}"
	};

	// // sy.file.content.replace(/[\n\r]+/g, '');
	// // sy.file.content.replace(/\s{2,10}/g, ' ');
	// // console.log('sy:', sy);
	// // sy.gistHtml.replace(/[\n\r]/g, '');
	// // sy.gistHtml.replace(/\s{2,10}/g, ' ');
	// // console.log('sy:', sy);
	// // let html = {__html: sy.content};
	// // const regex = /[\n\r]+/gm;
	// // const str = `"id": "4c8fe26dbeeeca181feab8dba31adbb6",
	// // 	"owner": {
	// // 		"username": "KnightAsterial",
	// // 		"profile": "https://github.com/KnightAsterial"
	// // 	},
	// // 	"file": {
	// // 		"fileName": "simple-state-api-demo.js",
	// // 		"fileType": "application/javascript",
	// // 		"content": "import axios from \\"axios\\";\\nimport React from \\"react\\";\\nimport \\"./App.css\\";\\n\\nexport default function App() {\\n  const [imgURL, setImgURL] = React.useState(\\"\\");\\n\\n  async function fetchData() {\\n    let response = await axios.get(\\"https://dog.ceo/api/breed/pomeranian/images/random\\");\\n    setImgURL(response.data.message);\\n    console.log(response.data.message);\\n  }\\n\\n  React.useEffect(() => {fetchData()}, []);\\n\\n  return (\\n    <div className=\\"App\\">\\n      <h1>Returned {imgURL}</h1>\\n      <img src={imgURL} alt=\\"doggo\\" />\\n    </div>\\n  );\\n}"
	// // 	},
	// // 	"gistURL": "https://gist.github.com/4c8fe26dbeeeca181feab8dba31adbb6",
	// // 	"gistHtml": "import axios from \\"axios\\";\\nimport React from \\"react\\";\\nimport \\"./App.css\\";\\n\\nexport default function App() {\\n  const [imgURL, setImgURL] = React.useState(\\"\\");\\n\\n  async function fetchData() {\\n    let response = await axios.get(\\"https://dog.ceo/api/breed/pomeranian/images/random\\");\\n    setImgURL(response.data.message);\\n    console.log(response.data.message);\\n  }\\n\\n  React.useEffect(() => {fetchData()}, []);\\n\\n  return (\\n    <div className=\\"App\\">\\n      <h1>Returned {imgURL}</h1>\\n      <img src={imgURL} alt=\\"doggo\\" />\\n    </div>\\n  );\\n}"
	// // };`;
	// // const subst = `\r`;

	// // // The substituted value will be contained in the result variable
	// // const result = str.replace(regex, subst);

	// // console.log('Substitution result: ', result);
	// const regex = /\\"+/gm;
	// const str = `"import axios from \\"axios\\";\\nimport React from \\"react\\";\\nimport \\"./App.css\\";\\n\\nexport default function App() {\\n  const [imgURL, setImgURL] = React.useState(\\"\\");\\n\\n  async function fetchData() {\\n    let response = await axios.get(\\"https://dog.ceo/api/breed/pomeranian/images/random\\");\\n    setImgURL(response.data.message);\\n    console.log(response.data.message);\\n  }\\n\\n  React.useEffect(() => {fetchData()}, []);\\n\\n  return (\\n    <div className=\\"App\\">\\n      <h1>Returned {imgURL}</h1>\\n      <img src={imgURL} alt=\\"doggo\\" />\\n    </div>\\n  );\\n}"`;
	// const subst = `"`;
	
	// // The substituted value will be contained in the result variable
	// const result = str.replace(regex, subst);
	
	// const regexTwo = /\\n+/gm;
	// const strTwo = result;
	// const substTwo = `\n`;
	// const resultTwo = strTwo.replace(regexTwo, substTwo);
	// console.log('Substitution result: ', resultTwo);
	// let html = {__html: resultTwo};
	let text= sy.gistHtml;
	// console.log([
	// 	crlf(text, LF),
	// 	crlf(text, CRLF),
	// 	crlf(text, CR),
	// 	lineSplit(text)
	// ]);
	// console.log(eol.before(text));
	text = eol.split(text);
	let genHTML = ``;
	text.forEach(line => {
		console.log('genHTML:', genHTML);
		console.log('line:', line);
		genHTML = genHTML.concat(`<p>`, line, `</p>`);
	});
	const tmp = genHTML.concat(`<p>`, `async`, `</p>`);
	console.log('tmp:', tmp);

	console.log('genHTML:', genHTML);
	return (
		<>
			<div className="gistDetail">{genHTML}</div>
		</>
	);


};

export default Test;
