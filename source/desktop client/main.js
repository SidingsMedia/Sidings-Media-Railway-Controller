// ./main.js
//Copyright 2020 Sidings Media
//License: MIT

const { app, BrowserWindow, Menu, shell } = require('electron')
var fullscreen = false//For toggling between fullscreen and standard
function createWindow (){
    //Create browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    })
    //Load index.html
    win.loadFile('index.html')
    //Create custom menu bar
    
    var menu = Menu.buildFromTemplate([
        //Elements of menu bar
        {
            label: 'File',
            submenu: [
                {
                    label: 'Preferences'//No action
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
                        win.reload()
                    }
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: 'F11',
                    click(){
                        if (fullscreen == false){
                            fullscreen = true
                            win.setFullScreen(true)
                        }
                        else{
                            fullscreen = false
                            win.setFullScreen(false)
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
                        win.webContents.openDevTools()
                    }
                }
            ],
        },
        {
            label: 'Window',
            submenu: [
                {
                    label: 'Minimize',
                    accelerator: 'Ctrl+M',
                    click(){
                        win.minimize()
                    }
                }
            ],
        },
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
                    type: 'separator'
                },
                {
                    label: 'Website',
                    click(){
                        shell.openExternal('https://www.sidingsmedia.com')
                    }
                },
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
                    label: 'About'//No action
                }

            ]

        }

    ])
    Menu.setApplicationMenu(menu)
    
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