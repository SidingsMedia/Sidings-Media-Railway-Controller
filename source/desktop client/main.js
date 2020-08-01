// ./main.js
//Copyright 2020 Sidings Media
//License: MIT

const { app, BrowserWindow } = require('electron')
function createWindow (){
    //Create browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //Load index.html
    win.loadFile('index.html')
}
//Called when electron has finished initialising
app.whenReady().then(createWindow)
//Quit when all windows are closed except on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})