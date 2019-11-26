const { app, BrowserWindow, Menu } = require('electron')
const fs = require('fs')

function capturar(params) {
  var textTinta = document.getElementById('tinta').value
  document.getElementById('braille').innerHTML = textTinta

  fs.writeFile('nome.txt',textTinta, () => {
	  console.log('porra')
  })
}

function saveTextAsFile()
{
	var textToWrite = document.getElementById('tinta').value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	//var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
  var fileNameToSaveAs =  "texto.docx"
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
