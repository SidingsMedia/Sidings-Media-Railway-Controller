// ./js/render.js
//Copyright 2020 Sidings Media
//License: MIT

//Include required modules
const Mousetrap = require('mousetrap');
const customTitlebar = require('custom-electron-titlebar');

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

//Set titlebar
const bgcolour = '#323233';
let titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex(bgcolour),
	icon: './assets/logos/logo.png',
});



//Mousetrap keybindings
Mousetrap.bind('mod+w', function() {
    sendRequest({window:'mainWindow', func:'close'})
})
Mousetrap.bind('mod+,', function() {
	sendRequest({window: 'mainWindow', func:'openPreferences'})
})
Mousetrap.bind('mod+q', function() {
	sendRequest({window: 'app', func:'exit'})
})
Mousetrap.bind('mod+r', function() {
	sendRequest({window: 'mainWindow', func:'reload'})
})
Mousetrap.bind('f11', function() {
	sendRequest({window: 'mainWindow', func:'toggleFullscreen'})
})
Mousetrap.bind('mod+shift+i', function() {
	sendRequest({window: 'mainWindow', func:'toggleDev'})
})
Mousetrap.bind('mod+m', function() {
	sendRequest({window: 'mainWindow', func:'min'})
})

