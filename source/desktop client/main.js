// ./main.js
//Copyright 2020 Sidings Media
//License: MIT

const { app, BrowserWindow, Menu } = require('electron')
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
    /*
    var menu = Menu.buildFromTemplate([
        //Elements of menu bar
        {
            label: 'File',
            submenu: [
                {
                    label: 'Preferences'
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
                    label: 'Copy',
                    accelerator: 'Ctrl+C'
                },
                {
                    label: 'Select All',
                    accelerator: 'Ctrl+A'
                }
            ],
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'Ctrl+R'
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: 'F11'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Toggle Developer Tools',
                    accelerator: 'Ctrl+Shift+I'
                }
            ],
        },
        {
            label: 'Window',
            submenu: [
                {
                    label: 'Minimize',
                    accelerator: 'Ctrl+M'
                }
            ],
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Documentation'
                },
                {
                    label: 'License'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Website'
                },
                {
                    label: 'Join us on social media',
                    submenu: [
                        {
                            label:'Join us on Facebook'
                        },
                        {
                            label: 'Join us on Twitter'
                        },
                        {
                            label: 'Join us on YouTube'
                        },
                        {
                            label: 'Join us on Instagram'
                        },
                        {
                            label: 'Join us on Tumblr'
                        },
                        {
                            type: 'separator'
                        },
                        {
                            label: 'Join us on GitHub'
                        },
                        {
                            label:'Join us on EasyEda'
                        }
                    ]
                },
                {
                    type: 'separator'
                },
                {
                    label: 'About'
                }

            ]

        }

    ])
    Menu.setApplicationMenu(menu)
    */
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