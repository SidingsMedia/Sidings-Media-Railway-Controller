// ./js/render.js
//Copyright 2020 Sidings Media
//License: MIT
var Mousetrap = require('mousetrap');

//Include JQuery
var script = document.createElement('script'); 
script.src = './node_modules/jquery/dist/jquery.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);
const customTitlebar = require('custom-electron-titlebar');
const bgcolour = '#323233';
let titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex(bgcolour),
	icon: './assets/logos/logo.png',
});
function addControl() {
	var html = `
				<div class="control">
                    <div class="control-main">
                        <h2>Relay Board 1</h2>
                        <table class="control-main-buttons">
                            <tr>
                                <td><button>Channel 1</button></td>
                                <td><button>Channel 2</button></td>
                                <td><button>Channel 3</button></td>
                                <td><button>Channel 4</button></td>
                            </tr>
                            <tr>
                                <td><button>Channel 5</button></td>
                                <td><button>Channel 6</button></td>
                                <td><button>Channel 7</button></td>
                                <td><button>Channel 8</button></td>
                            </tr>
                            <tr>
                                <td><button>Channel 9</button></td>
                                <td><button>Channel 10</button></td>
                                <td><button>Channel 11</button></td>
                                <td><button>Channel 12</button></td>
                            </tr>
                        </table>
                    </div>
                    <div class="control-sidebar">
                        <div class="settingsDropdown">
                            <button onclick="showSettingsDropdown('settingsDropdown')" class="settingsDropdownBtn control-sidebar-button"><i class="fas fa-ellipsis-h"></i></button>
                            <div id="settingsDropdown" class="settingsDropdown-content">
							  <button class="control-sidebar-button"><i class="fas fa-trash-alt"></i></button>
							  <button class="control-sidebar-button"><i class="fas fa-pen"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
	`;        
	$("#main").append(html);        

}
/* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
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