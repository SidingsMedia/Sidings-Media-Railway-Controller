// ./js/render.js
//Copyright 2020 Sidings Media
//License: MIT
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
		<div class=\"control\">
			<h1>This is a control area</h1>
		</div>
	`;        
	$("#main").append(html);        

}



