// ./js/openUrl.js
//Copyright 2020 Sidings Media
//License: MIT
const{ shell } = require('electron')
var urls = {
    facebook: 'https://www.facebook.com/Sidings-Media-589191041769930',
    twitter: 'https://twitter.com/sidingsmedia',
    youtube: 'https://youtube.com',
    instagram: 'https://www.instagram.com/sidingsmedia/',
    tumblr: 'https://sidingsmedia.tumblr.com',
    github: 'https://github.com/sidingsmedia',
    easyeda: 'https://easyeda.com/Sidings-Media/',
    docs: 'https://smrcdocs.sidingsmedia.com',
    license: 'https://raw.githubusercontent.com/SidingsMedia/DC-Model-Railway-Controller/master/LICENSE',
    contribute: 'https://github.com/SidingsMedia/Sidings-Media-Railway-Controller/blob/master/CONTRIBUTING.md',
    website: 'https://sidingsmedia.com',
    thesidings: 'https://www.youtube.com/channel/UCZmBfzy3_Jdo5YrsE6o04sg',
    sidingselectric: 'https://www.youtube.com/channel/UCZOIvXgjCMrqjUHvgx_213A'
}
function openURL(platform){
    shell.openExternal(urls[platform])
}