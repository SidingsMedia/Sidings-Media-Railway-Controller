// ./js/editbarComs.js
//Copyright 2020 Sidings Media
//License: MIT
const electron = require("electron");
const ipc = electron.ipcRenderer;
const swal = require("sweetalert");
/**
 *
 * @param {JSON} request - The request string to send over ipc. Must match a string in the main proccess
 */
function sendRequest(request) {
	ipc.send("windowControl", request);
}
ipc.on("windowControl", (event, arg) => {
	//pass
});
ipc.on("aboutData", (event, arg) => {
	const el = document.createElement("div");
	el.className = "infoPopup";
	el.innerHTML = `Version: ${arg.appVersion} <br>Node.js: ${arg.nodeVersion}<br>Chrome: ${arg.chromeVersion}<br>Electron: ${arg.electronVersion}<br>V8: ${arg.v8Version}<br>OS: ${arg.os}<br><br>Icons by Fontawesome:<br>The license can be found at:<br>https://fontawesome.com/license</a>`;
	swal({
		title: "About",
		content: el,
		icon: "info",
	});
});
