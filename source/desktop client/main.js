// ./main.js
//Copyright 2020 Sidings Media
//License: MIT

const { app, BrowserWindow, Menu, shell, dialog, session, ipcMain, webContents } = require('electron')
const { path } = require('path')
var os = require('os');
const { title } = require('process');
var ipcError
var aboutData = {
    nodeVersion: `${process.versions.node}`,
    chromeVersion: `${process.versions.chrome}`,
    electronVersion: `${process.versions.electron}`,
    appVersion: `${app.getVersion()}`,
    v8Version: `${process.versions.v8}`,
    os: `${`${os.type} ${os.arch} ${os.release}`}`
}



class GUI extends BrowserWindow {

    /**
     * Constructor
     * 
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
        //Create window with parameters
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
        //Load file to window
        this.loadFile(indexFile)
        //Open devtools if app not packaged
        if (app.isPackaged != true){
            this.webContents.openDevTools()
     
        }
        Menu.setApplicationMenu(menu)

    }
    closeWin(){
        if (this.webContents.isDevToolsOpened()) {
            this.webContents.closeDevTools()
        }
        this.close()
    }
    minimizeWin(){
        this.minimize()
    }
    toggleFullscreen() {
        if (this.isFullScreen() != true){
            this.setFullScreen(true)
        }
        else if (this.isFullScreen() == true) {
            this.setFullScreen(false)
        }
    }

    toggleDev() {
        this.openDevTools()
    }

}
var mainWindow;
var preferencesWindow;

//Called when electron has finished initialising
app.on('ready', () => {
    //Create mainWindow
    mainWindow = new GUI(800,600,800,600,'#323233','./assets/logos/logo.png', 'index.html')
    //Catch close event for custom close function
    mainWindow.on('close', function() { 
        //If devtools open close it
        if (mainWindow.webContents.isDevToolsOpened()){
            mainWindow.webContents.closeDevTools()
        }
        //Quit entire app
        app.quit()
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

//IPC messages for window Controls
ipcMain.on('windowControl', (event, arg) => {
    var request = arg
    //Main Window
    if (request.window == 'mainWindow'){

        //Open preferences window if func = openPreferences
        if (request.func == 'openPreferences') {
            //Create preferences window
            preferencesWindow = new GUI(800,600,800,600,'#323233','./assets/logos/logo.png','./html/preferences.html')
            //On close close dev tools if open
            preferencesWindow.on('close', function() { 
                if (preferencesWindow.webContents.isDevToolsOpened()){
                    preferencesWindow.webContents.closeDevTools()
                }
            })
        
        }
        
        //Close
        if (request.func == 'close'){
            mainWindow.closeWin()
        }

        //Minimize
        if (request.func == 'min'){
            mainWindow.minimizeWin()
        }

        //Full screen
        if (request.func == 'toggleFullscreen'){
            mainWindow.toggleFullscreen()
        }

        //Open devtools
        if (request.func == 'toggleDev'){
            mainWindow.toggleDev()
        }

        //Reload window
        if (request.func == 'reload'){
            mainWindow.reload()
        }

        //Open about dialog
        if (request.func == 'about'){
            event.reply('aboutData', aboutData)        
        }
    } 

    //Preferences
    if (request.window == 'preferences'){        
        //Close
        if (request.func == 'close'){
            preferencesWindow.closeWin()
        }

        //Minimize
        if (request.func == 'min'){
            preferencesWindow.minimizeWin()
        }

        //Full screen
        if (request.func == 'toggleFullscreen'){
            preferencesWindow.toggleFullscreen()
        }

        //Open devtools
        if (request.func == 'toggleDev'){
            preferencesWindow.toggleDev()
        }

        //Reload window
        if (request.func == 'reload'){
            preferencesWindow.reload()
        }

        //Open about dialog
        if (request.func == 'about'){
            event.reply('aboutData', aboutData)        
        }
    } 
    //Quit 
    if (request.window == 'app' && request.func == 'exit' && process.platform !== 'darwin'){
        app.quit()
    }
})
