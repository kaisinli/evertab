import INSTAGRAM_CLIENT_ID from '../../secrets.js'
var redirectUri = 'https://www.instagram.com/evertabextension/';
var storage = window.localStorage;

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');

    if (storage.getItem('accessToken') === null) {

        $('form').attr('action', `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code`);
        $('button').onClick(function (e) {
            var newHandleOne = $('#handle-one').val();
            storage.setItem('handleOne', newHandleOne);
            var newHandleTwo = $('#handle-two').val();
            storage.setItem('handleTwo', newHandleTwo);
            console.log('SUBMIT', e)
            e.preventDefault();
        })
    }
})