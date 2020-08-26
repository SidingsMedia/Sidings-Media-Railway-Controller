// ./main.js
//Copyright 2020 Sidings Media
//License: MIT

const { app, BrowserWindow, Menu, shell, dialog, session, ipcMain, webContents } = require('electron')
const { path } = require('path')
var os = require('os');
const { title } = require('process');
var nodeVersion = process.versions.node
var chromeVersion = process.versions.chrome
var electronVersion = process.versions.electron
var appVersion = app.getVersion()
var v8Version = process.versions.v8
var osVersion = os.release
var osType = os.type
var osArch = os.arch
var ipcError
const aboutOptions = {
    type: 'info',
    buttons: ['Ok'],
    defaultId: 0,
    title: "Railway Controller",
    message: "About",
    detail: `Version: ${appVersion} \nNode.js: ${nodeVersion}\nChrome: ${chromeVersion}\nElectron: ${electronVersion}\nV8: ${v8Version}\nOS: ${`${osType} ${osArch} ${osVersion}`}\nIcons by Fontawesome.\nThe license can be found here: https://fontawesome.com/license`

}


class GUI extends BrowserWindow {
    /**
     * Generates a window
     * @param {number} width - The initial width of the window. Default 800
     * @param {number} height - The initial height of the window. Default 600
     * @param {number} minWidth - The minimum width the window can possibly be. Default 800
     * @param {number} minHeight - The minimum height the window can possibly be. Default 600
     * @param {string} backgroundColor - The background colour of the window. Default #FFF
     * @param {string} icon - The path to the icon. Default null
     * @param {string} indexFile - The path to the index file to be loaded. Default null
     * @param {Electron.Menu} menu - The menu that should be displayed. Default null
     */
    constructor(width = 800, height = 600, minWidth = 800, minHeight = 600, backgroundColor = '#FFF', icon = null, indexFile = null, menu = null){
        super({
            width: width,
            height: height,
            minWidth: minWidth,
            minHeight: minHeight,
            icon: icon,
            backgroundColor: backgroundColor,
            frame: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        })
        this.loadFile(indexFile)
        this.webContents.openDevTools()
        Menu.setApplicationMenu(menu)

        this.fullScreenStatus = false
        
        
        
    }//Constructor
    closeWin(){
        console.log(this.webContents.isDevToolsOpened())
        //     this.webContents.closeDevTools()
        // }
        // this.close()
        if (this.webContents.isDevToolsOpened()) {
            this.webContents.closeDevTools()
        }
        console.log('close win activated')
        this.close()
        console.log('It should be closed by now')
    }//Close
    minimizeWin(){
        this.minimize()
    }//Minimize
    toggleFullscreen() {
        console.log('full screen selected')
        console.log(this.isFullScreen())
        if (this.isFullScreen() != true){
            this.setFullScreen(true)
        }
        else if (this.isFullScreen() == true) {
            this.setFullScreen(false)
        }
    }//toggleFullScreen
    toggleDev() {
        this.openDevTools()
    }//toggleDev
    test() {
        console.log('Test has been called')
    }
}
var mainWindow;

//Called when electron has finished initialising
app.on('ready', () => {
    mainWindow = new GUI(800,600,800,600,'#323233','./assets/logos/logo.png', 'index.html')
    mainWindow.on('close', function() { //   <---- Catch close event
        if (mainWindow.webContents.isDevToolsOpened()){
            mainWindow.webContents.closeDevTools()
            app.quit()
        }
    });
})
//Quit when all windows are closed except on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})

const bindings = require('@serialport/bindings')

var listOfPorts=[];

//called automatically by bindings.list()
function list(ports) {
  listOfPorts=ports;
  // now listOfPorts will be the port Objects
  console.log(listOfPorts);
}

bindings.list().then(list, err => {
  process.exit(1)
})
// console.log(bindings.list)
ipcMain.on('windowControl', (event, arg) => {
    console.log(arg)
    // var request = JSON.parse(arg)
    var request = arg
    console.log(request)
    console.log(request.window)
    if (request.window == 'mainWindow'){
        if (request.func == 'openPreferences') {
            //Create preferences window
            let preferencesWindow = new GUI(800,600,800,600,'#323233','./assets/logos/logo.png','./html/preferences.html')
            //On close close dev tools if open
            preferencesWindow.on('close', function() { 
                if (preferencesWindow.webContents.isDevToolsOpened()){
                    preferencesWindow.webContents.closeDevTools()
                }
            })
        
        }
        if (request.func == 'close'){
            mainWindow.closeWin()
        }
        if (request.func == 'min'){
            mainWindow.minimizeWin()
        }
        if (request.func == 'toggleFullscreen'){
            mainWindow.toggleFullscreen()
        }
        if (request.func == 'toggleDev'){
            mainWindow.toggleDev()
        }
        if (request.func == 'reload'){
            mainWindow.reload()
        }
    } 
    if (request.window == 'app' && request.func == 'exit' && process.platform !== 'darwin'){
        app.quit()
    }
})
