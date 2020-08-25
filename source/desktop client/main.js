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


class window extends BrowserWindow {
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
        this.fullscreen = false
            
        
        this.loadFile(indexFile)
        this.webContents.openDevTools()
        menu = Menu.buildFromTemplate([
            //Elements of menu bar
        
            //File
        
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Preferences',
                        click() {
                            const preferences = new BrowserWindow({
                                width: 800,
                                height: 600,
                                minWidth:800,
                                minHeight:600,
                                icon: 'assets/logos/logo.png',
                                backgroundColor: '#323233',
                                webPreferences: {
                                    nodeIntegration: true,
                                    enableRemoteModule: true,
                                    
                                },
                                frame: false
                            })
                            preferences.loadFile('./html/preferences.html')
        
                        }
                    },
                    {
                        type:'separator'
                    },
                    {
                        label: 'Exit',
                        accelerator: 'Ctrl+Q',
                        click() {
                            app.quit()
                        }
                    }
                 
                ]
            },
        
            //Edit
        
            {
                label: 'Edit',
                submenu: [
                    {
                        label: 'There ain\'t nothing here yet. ',//No action
        
                    },
                ]
            },
            {
                label: 'View',
                submenu: [
                    {
                        label: 'Reload',
                        accelerator: 'Ctrl+R',
                        click(){
                            this.win.reload()//Needs to be changed so it reloads current window instead of main window.
                        }
                    },
                    {
                        label: 'Toggle Full Screen',
                        accelerator: 'F11',
                        click(){
                            if (this.fullscreen == false){
                                this.fullscreen = true
                                this.win.setFullScreen(true)
                            }
                            else{
                                this.fullscreen = false
                                this.win.setFullScreen(false)
                            }
        
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Ctrl+Shift+I',
                        click(){
                            this.openDevTools()
                        }
                    }
                ],
            },
        
            //Window
        
            {
                label: 'Window',
                submenu: [
                    {
                        label: 'Minimize',
                        accelerator: 'Ctrl+M',
                        click(){
                            this.minimize()
                        }
                    }
                ],
            },
        
            //Help
        
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'Documentation',
                        click(){
                            shell.openExternal('https://smrcdocs.sidingsmedia.com')
                        }
                    },
                    {
                        label: 'License',
                        click(){
                            shell.openExternal('https://raw.githubusercontent.com/SidingsMedia/DC-Model-Railway-Controller/master/LICENSE')
                        }
                    },
                    {
                        label: 'Contribute',
                        click(){
                            shell.openExternal('https://github.com/SidingsMedia/Sidings-Media-Railway-Controller/blob/master/CONTRIBUTING.md')
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Website',
                        click(){
                            shell.openExternal('https://www.sidingsmedia.com')
                        }
                    },
        
                    //Social Media
        
                    {
                        label: 'Join us on social media',
                        submenu: [
                            {
                                label:'Join us on Facebook',
                                click(){
                                    shell.openExternal("https://www.facebook.com/Sidings-Media-589191041769930")
                                }
                            },
                            {
                                label: 'Join us on Twitter',
                                click(){
                                    shell.openExternal("https://twitter.com/sidingsmedia")
                                }
                            },
        
                            //YouTube
        
                            {
                                label: 'Join us on YouTube',
                                submenu: [
                                    {
                                        label: "The Sidings",
                                        click(){
                                            shell.openExternal("https://www.youtube.com/channel/UCZmBfzy3_Jdo5YrsE6o04sg")
                                        }
                                    },
                                    {
                                        label: "Sidings Electric",
                                        click(){
                                            shell.openExternal("https://www.youtube.com/channel/UCZOIvXgjCMrqjUHvgx_213A")
                                        }
                                    }
        
                                ]
                            
                            },
                            {
                                label: 'Join us on Instagram',
                                click(){
                                    shell.openExternal("https://www.instagram.com/sidingsmedia/")
                                }
                            },
                            {
                                label: 'Join us on Tumblr',
                                click(){
                                    shell.openExternal("https://sidingsmedia.tumblr.com")
                                }
                            },
                            {
                                type: 'separator'
                            },
                            {
                                label: 'Join us on GitHub',
                                click(){
                                    shell.openExternal("https://github.com/sidingsmedia")
                                }
                            },
                            {
                                label:'Join us on EasyEda',
                                click(){
                                    shell.openExternal("https://easyeda.com/Sidings-Media/")
                                }
                            }
                        ]
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'About',
                        click(){
                            dialog.showMessageBox(this, aboutOptions, (response) => {
                                console.log(response)
                            })
                            
                        }
                    }
        
                ]
        
            }
        
        ])//Menu
        Menu.setApplicationMenu(menu)
        
    }
    minimize(){
        this.minimize()
    }
    openDevTools(){
        this.webContents.openDevTools
    }

}

//Called when electron has finished initialising
app.on('ready', () => {
    let mainWindow = new window(800,600,800,600,'#323233','./assets/logos/logo.png', 'index.html')
})
//Quit when all windows are closed except on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})
// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0){
//         createWindow()
//     }
// })
// let serialport = require('serialport');
 
// // list serial ports:
// serialport.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//   });
// });



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
