// ./js/preferencesrender.js
//Copyright (c) 2020 Sidings Media, All rights reserved
//License: MIT
//See LICENSE in the project root for license information.
const customTitlebar = require("custom-electron-titlebar");
const bgcolour = "#323233";
let titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex(bgcolour),
	icon: "../assets/logos/logo.png",
});
