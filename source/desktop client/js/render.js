//Set custom titlebar
const titlebar = require('custom-electron-titlebar');

new titlebar.Titlebar({
	backgroundColor: titlebar.Color.fromHex('#323233'),
});
titlebar.updateIcon('../assets/logos/logo.png')