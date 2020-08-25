const{ shell } = require('electron')
var urls = {
    facebook: 'https://www.facebook.com/Sidings-Media-589191041769930',
    twitter: 'https://twitter.com/sidingsmedia',
    youtube: 'https://youtube.com',
    instagram: 'https://www.instagram.com/sidingsmedia/',
    tumblr: 'https://sidingsmedia.tumblr.com',
    github: 'https://github.com/sidingsmedia',
    easyeda: 'https://easyeda.com/Sidings-Media/'
}
function openURL(platform){
    shell.openExternal(urls[platform])
}