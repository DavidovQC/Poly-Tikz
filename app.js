const head = document.getElementsByTagName("head")[0];



const tikzRender = document.getElementById('tikz-picture');
const tikzText = document.getElementById('tikz-code');
const tikzContainer = document.getElementById('tikz-container')



const generateButton = document.getElementById('generate-button');
const renderButton = document.getElementById('render-button');


let tikzCodeString = "";
const stringStart = "\\begin{tikzpicture}";
let stringContents = "\\draw (1,1) circle (1in);";
let newStringContents =  "\\draw (1,1) circle (1.5in);";
const stringEnd = "\\end{tikzpicture}";

tikzRender.textContent = stringStart + stringContents + stringEnd;

renderButton.addEventListener('click', testFunction);

// tikzRender.textContent = myString;

// tikzText.textContent = myString;

function deleteScriptFromHead(){
    head.removeChild(document.getElementById('tikzjax-script'));
}

function clearTikzContainer(){
    tikzContainer.innerHTML = "";
}

function fillTikzContainer(){
    var script = document.createElement("script");
    script.setAttribute("type", "text/tikz");
    script.setAttribute("id", "tikz-picture");
    script.textContent = stringStart + newStringContents + stringEnd;
    tikzContainer.append(script);
}

function addScriptToHead(){
    var script = document.createElement("script");
    script.setAttribute('id', "tikzjax-script");
    script.src = 'https://tikzjax.com/v1/tikzjax.js'
    head.appendChild(script);
}

function testFunction(){
    deleteScriptFromHead();
    //Get rid of contents in container
    clearTikzContainer(); //Works
    fillTikzContainer();
    addScriptToHead();
}

