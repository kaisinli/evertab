import INSTAGRAM_CLIENT_ID from '../../secret.js'
var redirectUri = 'http://localhost';
var storage = window.localStorage;

$(document).ready(function () {
    var currentTag = storage.getItem('currentTag');
    
    if (storage.getItem('accessToken') === null) {
        $('body')
            .addClass ('not-authenticated')
            .append('<div class = "intro-page"></div>')
    }
})