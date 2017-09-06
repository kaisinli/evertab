import authLink from '../../secrets.js';
var storage = window.localStorage;
var Promise = require('bluebird');

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');
    var accessToken = storage.getItem('accessToken');
    var urlAccessToken = '';

    if (accessToken === null) {
        //query AT in url
        chrome.tabs.query({ active: true, currentWindow: true }, function callback(tabs) {
            var currentTab = tabs[0];
            console.log(currentTab);
        })

        if (urlAccessToken = '') {
            $("#step-two").remove();
            $("#new-handle-form").remove();
            $('a').attr('href', authLink);

        } else {
            $("#step-one").remove();
            $('#step-two').on('click', function () { })
        }

    } else {
        $('button').remove();
        $('form')
            .submit(function (e) {
                var newHandleOne = $('#handle-one').val();
                storage.setItem('handleOne', newHandleOne);
                var newHandleTwo = $('#handle-two').val();
                storage.setItem('handleTwo', newHandleTwo);
            });
    }

})
