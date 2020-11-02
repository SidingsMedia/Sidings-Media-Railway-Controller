// ./js/controlPannels.js
//Copyright (c) 2020 Sidings Media, All rights reserved
//License: MIT
//See LICENSE in the project root for license information.

//Include required modules
const fs = require("fs");
const path = require("path");
const os = require("os");
//Get Path to appdata or OS equivilent
var saveDir =
	process.env.LOCALAPPDATA ||
	(process.platform == "darwin"
		? process.env.HOME + "/Library/Preferences"
		: process.env.HOME + "/.local/share"); //Get outdir depending on os
//Handles opening and closing of popups
//Add panel popup
var addControlPopup = document.getElementById("add-control-popup");
var addControlBtn = document.getElementById("add-control");
var addControlSpan = document.getElementsByClassName("popup-close")[0];
addControlBtn.onclick = function () {
	addControlPopup.style.display = "block";
};
//Close popup when x clicked
addControlSpan.onclick = function () {
	addControlPopup.style.display = "none";
};
// //Edit panel popup
// var editControlPopup = document.getElementById("edit-control-popup");
// var editControlSpan = document.getElementsByClassName("popup-close")[1];
// editControlSpan.onclick = function(){
//     editControlPopup.style.display = "none"
// }

// //Show edit popup
// function showEditPanelPopup(id){
//     editControlPopup.style.display = "block"
//     try{
//         var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'))
//         var data = JSON.parse(rawData)
//     }
//     catch{
//         return
//     }
//     document.getElementById('edit-friendly-name').value = data[id]
//     document.getElementById('edit-macInput').value = id.toUpperCase().replace(/-/g, ':')
//     document.getElementById('edit-macInput').readOnly = true
//     document.getElementById('edit-macInput').style.cursor = 'not-allowed'

// }
// function editPanel(){
//     macAddress = document.getElementById('edit-macInput').value.toLowerCase().replace(/:/g, '-')
//     friendlyName = document.getElementById('edit-friendly-name').value
//     try{
//         var rawData = fs.readFileSync(path.join(saveDir, 'smrc', 'panels.json'))
//         var data = JSON.parse(rawData)
//         data[macAddress] = friendlyName
//         let saveData = JSON.stringify(data, null, 2)
//         fs.writeFile(path.join(saveDir, 'smrc', 'panels.json'), saveData, (err) =>{
//             if (err) throw err;
//         })
//         sendRequest({window:'mainWindow', func:'reload'})
//     }
//     catch{
//         return
//     }

// }
function showEditPanelPopup(id) {
	try {
		var rawData = fs.readFileSync(
			path.join(saveDir, "smrc", "panels.json")
		);
		var data = JSON.parse(rawData);
	} catch {
		var el = document.createElement("div");
		el.className = "settingsSavePopup";
		el.innerHTML = `An error occured when trying to access the config file`;
		swal({
			title: "Error",
			content: el,
			icon: "error",
		});
	}
	var html = `
            <div class="control-popup" id="edit-control-popup">
                <div class="popup-content">
                    <span onclick="$('#edit-control-popup').remove();" class="popup-close">&times;</span>
                    <br>
                    <form name="preferences" onsubmit="return editPanel('${id}') ">
                        <fieldset style="    margin-top: 20px;">
                            <h1 style="text-align: center;">Edit accessory control</h1>
                        </fieldset>
                        <fieldset>
                            <div id="edit-options">
                                <label for='edit-friendly-name'>Friendly name</label>
                                <input type="text" name="edit-friendly-name" id="edit-friendly-name" placeholder="Station Isolation" required value="${
									data[id]["friendlyName"]
								}">
                                <div class="tooltip">&nbsp;<i class="fas fa-question-circle" ></i>
                                    <span class="tooltiptext">This is friendly name of the board. This is meant to make boards easier to identify.</span>
                                </div>
                                <br>
                                <label for="edit-macInput">Board MAC address</label>
                                
                                <input type="text" name="edit-macInput" id="edit-macInput" pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"  placeholder="FF:FF:FF:FF:FF:FF" required value="${data[
									id
								]["macAddress"]
									.toUpperCase()
									.replace(/-/g, ":")}">
                                
                                <div class="tooltip">&nbsp;<i class="fas fa-question-circle" ></i>
                                    <span class="tooltiptext">This is the MAC address of the accessory control board. You cannot edit this after adding a board.</span>
                                </div>
                                <label for="edit-boardType">Board type</label>
                                <select name="edit-boardType" id="edit-boardType" required>
                                    <option value="" selected disabled hidden>--Select--</option>
                                    <option value="12Relay">12 Channel Relay</option>
                                    <option value="throttle">Throttle</option>
                                </select>
                                <div class="tooltip">&nbsp;<i class="fas fa-question-circle" ></i>
                                    <span class="tooltiptext">Select the type of board you have from the dropdown. You cannot edit this after adding a board.</span>
                                </div>
                            </div>

                        </fieldset>
                        <fieldset style="padding: 0;">
                            <button type="submit" class="save-button">Save</button>
                        </fieldset>
                        
                    </form>
                    <br>
                </div>
            </div>
    `;
	$("#main").append(html);
	switch (data[id]["boardType"]) {
		case "throttle":
			var additionalHtml = `
                <div class="otherOption">
                    <label for='edit-channelNo'>Channel Number</label>
                    <input type="text" name="channelNo" id="edit-channelNo" placeholder="1" pattern"(?<!\\S)[1-4](?!\\S)" required value="${data[id]["channelNo"]}">
                    <div class="tooltip">&nbsp;<i class="fas fa-question-circle" ></i>
                        <span class="tooltiptext">This is number of the channel that you are using. You cannot edit this after adding a board.</span>
                    </div>
                </div
            `;
			$("#edit-options").append(additionalHtml);
			document.getElementById("edit-channelNo").readOnly = true;
			document.getElementById("edit-channelNo").style.cursor =
				"not-allowed";
			break;
		default:
		//pass
	}

	document.getElementById("edit-control-popup").style.display = "block";
	document.getElementById("edit-boardType").value = data[id]["boardType"];
	document.getElementById("edit-boardType").disabled = true;
	document.getElementById("edit-boardType").style.cursor = "not-allowed";
	document.getElementById("edit-macInput").readOnly = true;
	document.getElementById("edit-macInput").style.cursor = "not-allowed";
}
function editPanel(id) {
	var boardType = document.getElementById("edit-boardType").value;
	try {
		var rawData = fs.readFileSync(
			path.join(saveDir, "smrc", "panels.json")
		);
		var data = JSON.parse(rawData);
		data[id]["friendlyName"] = document.getElementById(
			"edit-friendly-name"
		).value;
		let saveData = JSON.stringify(data, null, 2);
		fs.writeFile(
			path.join(saveDir, "smrc", "panels.json"),
			saveData,
			(err) => {
				if (err) throw err;
			}
		);
	} catch {
		return;
	}
}
//Delete panel
function deletePanel(id) {
	try {
		var rawData = fs.readFileSync(
			path.join(saveDir, "smrc", "panels.json")
		);
		var data = JSON.parse(rawData);
		delete data[id];
		let saveData = JSON.stringify(data, null, 2);
		fs.writeFile(
			path.join(saveDir, "smrc", "panels.json"),
			saveData,
			(err) => {
				if (err) throw err;
			}
		);
		sendRequest({
			window: "mainWindow",
			func: "reload",
		});
	} catch {
		return;
	}
}

//Add control pannels
function addControl(boardID, friendlyName, boardType, macAddress) {
	switch (boardType) {
		case "throttle":
			var insertLocation = "#throttle-area";
			var html = `
                <div class="throttle">
                    <div class="throttle-info">
                        <h3>${friendlyName}</h3>
                        <table>
                            <tr>
                                <td><button class="throttle-button"><i class="fas fa-pause"></i></button></td>
                                <td><button class="throttle-button">></button></td>
                                <td><button class="throttle-button">>></button></td>
                            </tr>
                            <tr>
                                <!-- <td><button class="throttle-button"><i class="fas fa-ellipsis-h"></i></button></td> -->
                                <td>
                                <div class="settingsDropdown">
                                    <button onclick="showSettingsDropdown('${boardID}')" class="settingsDropdownBtn throttle-button"><i class="fas fa-ellipsis-h settingsDropdownBtn"></i></button>
                                    <div id="${boardID}" class="settingsDropdown-content throttleDropdown-content">
                                    <button class="throttle-dropdown-button" onclick="deletePanel('${boardID}')"><i class="fas fa-trash-alt"></i></button>
                                    <button class="throttle-dropdown-button" onclick="showEditPanelPopup('${boardID}')"><i class="fas fa-pen"></i></button>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <input type="range" min="0" max="255" value="0" class="slider" >
                </div>
            `;
			break;
		case "12Relay":
			var insertLocation = "#main";
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
                            <button onclick="showSettingsDropdown('${boardID}')" class="settingsDropdownBtn control-sidebar-button"><i class="fas fa-ellipsis-h settingsDropdownBtn"></i></button>
                            <div id="${boardID}" class="settingsDropdown-content">
							  <button class="control-sidebar-button" onclick="deletePanel('${boardID}')"><i class="fas fa-trash-alt"></i></button>
							  <button class="control-sidebar-button" onclick="showEditPanelPopup('${boardID}')"><i class="fas fa-pen"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
			break;
		default:
			return;
	}

	$(insertLocation).append(html); //Add panel
	return true;
}

//Add panel from user input
function userAddPanel() {
	var rawData = fs.readFileSync(
		path.join(saveDir, "smrc", "panels.json"),
		(err) => {
			if (err) throw err;
		}
	);
	var data = JSON.parse(rawData);
	var macAddress = document
		.getElementById("macInput")
		.value.toLowerCase()
		.replace(/:/g, "-");
	var friendlyName = document.getElementById("friendly-name").value;
	var boardType = document.getElementById("boardType").value;
	switch (boardType) {
		case "throttle":
			var channelNo = document.getElementById("channelNo").value;
			var boardID = channelNo + macAddress;
			console.log(boardID);
			break;
		default:
			var boardID = macAddress;
	}
	if (data[boardID]) {
		addControlPopup.style.display = "none"; //Close popup
		document.getElementById("macInput").value = "";
		document.getElementById("friendly-name").value = "";
		var el = document.createElement("div");
		el.className = "settingsSavePopup";
		el.innerHTML = `A board with this ID or MAC address already exists`;
		swal({
			title: "Error",
			content: el,
			icon: "error",
		});
		return false;
	}
	switch (boardType) {
		case "throttle":
			data[boardID] = {
				friendlyName: friendlyName,
				macAddress: macAddress,
				boardType: boardType,
				channelNo: channelNo,
			};
			break;
		default:
			data[macAddress] = {
				friendlyName: friendlyName,
				macAddress: macAddress,
				boardType: boardType,
			};
	}

	let saveData = JSON.stringify(data, null, 2);
	fs.writeFile(path.join(saveDir, "smrc", "panels.json"), saveData, (err) => {
		if (err) throw err;
	});
	// document.getElementById('macInput').value = ''
	// document.getElementById('friendly-name').value = ''
	return; //Reloads the page to load new modules
}

function extraFormInputs() {
	var boardType = document.getElementById("boardType").value;
	switch (boardType) {
		case "throttle":
			console.log("Throttle");
			var html = `
                <div class="otherOption">
                    <label for='channelNo'>Channel Number</label>
                    <input type="text" name="channelNo" id="channelNo" placeholder="1" pattern"(?<!\\S)[1-4](?!\\S)" required>
                    <div class="tooltip">&nbsp;<i class="fas fa-question-circle" ></i>
                        <span class="tooltiptext">This is number of the channel that you are using.</span>
                    </div>
                </div
            `;
			$("#options").append(html);
			break;

		default:
			$(".otherOption").remove();
			return;
	}
}
window.onload = function () {
	try {
		var rawData = fs.readFileSync(
			path.join(saveDir, "smrc", "panels.json"),
			(err) => {
				if (err) throw err;
			}
		);
		var data = JSON.parse(rawData);
		for (let k in data) {
			addControl(
				k,
				data[k]["friendlyName"],
				data[k]["boardType"],
				data[k]["macAddress"]
			);
		}
	} catch {
		//Pass
	}
};
