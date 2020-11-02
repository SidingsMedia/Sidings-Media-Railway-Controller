// ./js/preferencesrender.js
//Copyright (c) 2020 Sidings Media, All rights reserved
//License: MIT
//See LICENSE in the project root for license information.
const fs = require("fs");
const path = require("path");
const os = require("os");

function saveSettings() {
	var outDir =
		process.env.LOCALAPPDATA ||
		(process.platform == "darwin"
			? process.env.HOME + "/Library/Preferences"
			: process.env.HOME + "/.local/share"); //Get outdir depending on os
	var ipAddress = document.getElementById("ipSelect").value;
	var ipCheck = RegExp("^(10|172.1[6-9]|172.2[0-9]|172.3[0-1]|192.168)."); //Make sure that ip is private excluding 127.0.0.0/8 (localhost) and 169.254.0.0/16 (APIPA)
	if (ipCheck.test(ipAddress) === false) {
		var el = document.createElement("div");
		el.className = "infoPopup";
		el.innerHTML = `You entered a public IP address. Only private IP's allowed`;
		swal({
			title: "Error",
			content: el,
			icon: "error",
		});
		return false; //Prevent page from reloading
	} else {
		let saveData = { mainBoardIP: ipAddress };
		let data = JSON.stringify(saveData, null, 2);
		fs.promises
			.mkdir(path.join(outDir, "smrc"), { recursive: true })
			.then((x) =>
				fs.promises.writeFile(
					path.join(outDir, "smrc", "settings.json"),
					data
				)
			);
		var el = document.createElement("div");
		el.className = "settingsSavePopup";
		el.innerHTML = `Preferences saved successfully`;
		swal({
			title: "Success",
			content: el,
			icon: "success",
		});
		return false; //Prevents page reloading
	}
}

//Populate form elements on page load
window.onload = function () {
	var outDir =
		process.env.LOCALAPPDATA ||
		(process.platform == "darwin"
			? process.env.HOME + "/Library/Preferences"
			: process.env.HOME + "/.local/share"); //Get outdir depending on os
	try {
		var rawData = fs.readFileSync(
			path.join(outDir, "smrc", "settings.json")
		);
		var data = JSON.parse(rawData);
		document.getElementById("ipSelect").value = data["mainBoardIP"];
	} catch {
		//Pass
	}
};
