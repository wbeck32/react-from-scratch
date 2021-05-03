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

const t = encodeURIComponent(sy.gistHtml);

// console.log('t:', t);

sy.gistHtml.replace(/[\n\r]/g, '');
sy.gistHtml.replace(/\s{2,10}/g, ' ');
console.log('sy:', sy);

sy.file.content.replace(/[\n\r]+/g, '');
sy.file.content.replace(/\s{2,10}/g, ' ');
console.log('sy:', sy);



const r = encodeURI(sy.gistHtml);
// console.log('r:', r);
