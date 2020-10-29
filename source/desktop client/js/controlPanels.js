// ./js/controlPannels.js
//Copyright (c) 2020 Sidings Media, All rights reserved
//License: MIT
//See LICENSE in the project root for license information.

//Include required modules
const fs = require('fs')
const path = require('path')
const os = require('os')
//Include JQuery
var script = document.createElement('script'); 
script.src = './node_modules/jquery/dist/jquery.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);
//Get Path to appdata or OS equivilent
var saveDir = process.env.LOCALAPPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")//Get outdir depending on os
//Handles opening and closing of popups
//Add panel popup
var addControlPopup = document.getElementById("add-control-popup");
var addControlBtn = document.getElementById("add-control");
var addControlSpan = document.getElementsByClassName("popup-close")[0];
addControlBtn.onclick = function() {
    addControlPopup.style.display = "block";
}
//Close popup when x clicked
addControlSpan.onclick = function() {
    addControlPopup.style.display = "none";
}
//Edit panel popup
var editControlPopup = document.getElementById("edit-control-popup");
var editControlSpan = document.getElementsByClassName("popup-close")[1];
editControlSpan.onclick = function(){
    editControlPopup.style.display = "none"
}
window.onclick = function(event) {
    if (event.target == addControlPopup) {
        addControlPopup.style.display = "none";
    }
    if (event.target == editControlPopup){
        editControlPopup.style.display = "none";
    }
}



//Toggle dropdown
function showSettingsDropdown(id) {
	document.getElementById(id).classList.toggle("show");
	}
	
	// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.settingsDropdownBtn')) {
		var dropdowns = document.getElementsByClassName("settingsDropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
		}
	}
}
//Show edit popup
function showEditPanelPopup(id){
    editControlPopup.style.display = "block"
    try{
        var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'))
        var data = JSON.parse(rawData)
    }
    catch{
        return
    }
    document.getElementById('edit-friendly-name').value = data[id]
    document.getElementById('edit-macInput').value = id.toUpperCase().replace(/-/g, ':')
    document.getElementById('edit-macInput').readOnly = true
    document.getElementById('edit-macInput').style.cursor = 'not-allowed'

}
function editPanel(){
    macAddress = document.getElementById('edit-macInput').value.toLowerCase().replace(/:/g, '-')
    friendlyName = document.getElementById('edit-friendly-name').value
    try{
        var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'))
        var data = JSON.parse(rawData)
        data[macAddress] = friendlyName
        let saveData = JSON.stringify(data, null, 2)
        fs.writeFile(path.join(saveDir, 'smrc', 'panels.json'), saveData, (err) =>{
            if (err) throw err;
        })
        sendRequest({window:'mainWindow', func:'reload'})
    }
    catch{
        return
    }
    
}
//Delete panel
function deletePanel(id){
    try{
        var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'))
        var data = JSON.parse(rawData)
        delete data[id]
        let saveData = JSON.stringify(data, null, 2)
        fs.writeFile(path.join(saveDir, 'smrc', 'panels.json'), saveData, (err) =>{
            if (err) throw err;
        })
        sendRequest({window:'mainWindow', func:'reload'})
    }

    
    catch{
        return
    }
}

//Add control pannels
function addControl(macAddress, friendlyName) {
    
	var html = `
				<div class="control">
                    <div class="control-main">
                        <h2>${friendlyName}</h2>
                        <table class="control-main-buttons">
                            <tr>
                                <td><button>Channel 1</button></td>
                                <td><button>Channel 4</button></td>
                                <td><button>Channel 7</button></td>
                                <td><button>Channel 10</button></td>
                            </tr>
                            <tr>
                                <td><button>Channel 2</button></td>
                                <td><button>Channel 5</button></td>
                                <td><button>Channel 8</button></td>
                                <td><button>Channel 11</button></td>
                            </tr>
                            <tr>
                                <td><button>Channel 3</button></td>
                                <td><button>Channel 6</button></td>
                                <td><button>Channel 9</button></td>
                                <td><button>Channel 12</button></td>
                            </tr>
                        </table>
                    </div>
                    <div class="control-sidebar">
                        <div class="settingsDropdown">
                            <button onclick="showSettingsDropdown('${macAddress}')" class="settingsDropdownBtn control-sidebar-button"><i class="fas fa-ellipsis-h"></i></button>
                            <div id="${macAddress}" class="settingsDropdown-content">
							  <button class="control-sidebar-button" onclick="deletePanel('${macAddress}')"><i class="fas fa-trash-alt"></i></button>
							  <button class="control-sidebar-button" onclick="showEditPanelPopup('${macAddress}')"><i class="fas fa-pen"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
	`;        
    $("#main").append(html); //Add panel
    addControlPopup.style.display = 'none'  //Close popup
    // document.getElementById('macInput').value = ''
    // document.getElementById('friendly-name').value = ''
    return true
}

//Add panel from user input
function userAddPanel(){
    var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'), (err) =>{
        if (err) throw err;
    })
    var data = JSON.parse(rawData)
    var macAddress =  document.getElementById('macInput').value.toLowerCase().replace(/:/g, '-')
    var friendlyName = document.getElementById('friendly-name').value
    if(data[macAddress]){
        addControlPopup.style.display = 'none'  //Close popup
        document.getElementById('macInput').value = ''
        document.getElementById('friendly-name').value = ''
        var el = document.createElement('div')
        el.className = 'settingsSavePopup'
        el.innerHTML = `MAC address already exists`
        swal({
            title: 'Error',
            content: el,
            icon: 'error',
        })
        return false
    }
    data[macAddress] = friendlyName
    let saveData = JSON.stringify(data, null, 2)
    fs.writeFile(path.join(saveDir, 'smrc', 'panels.json'), saveData, (err) =>{
        if (err) throw err;
    })
    addControl(macAddress, friendlyName)
    return false//Prevent page reload
}
window.onload = function(){
    try{
        var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'), (err) => {
            if (err) throw err;
        })
        var data = JSON.parse(rawData)
        for(let k in data){
            addControl(k, data[k])
        }
    }
    catch{
        //Pass
    }
}


