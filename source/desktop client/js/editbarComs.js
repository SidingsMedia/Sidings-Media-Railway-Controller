// ./js/editbarComs.js
//Copyright 2020 Sidings Media
//License: MIT
const electron = require('electron')
const ipc = electron.ipcRenderer
/**
 * 
 * @param {JSON} request - The request string to send over ipc. Must match a string in the main proccess 
 */
function sendRequest(request) {
    ipc.send('windowControl', request)
}
ipc.on('windowControl', (event, arg) => {
    //pass
})