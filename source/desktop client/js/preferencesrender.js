// ./js/preferencesrender.js
//Copyright 2020 Sidings Media
//License: MIT
const customTitlebar = require("custom-electron-titlebar");
const bgcolour = "#323233";
let titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex(bgcolour),
	icon: "../assets/logos/logo.png",
});
