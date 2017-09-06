import INSTAGRAM_CLIENT_ID from '../../secrets.js';
var redirectUri = 'https://www.instagram.com/evertabextension/';
var authLink = `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token`;

var storage = window.localStorage;

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');
    var accessToken = storage.getItem('accessToken');

    if (accessToken === null) {
        chrome.tabs.query({ active: true, currentWindow: true },
            function isATInUrl(tabs) {
                var currentTabUrl = tabs[0].url;
                var ATFragmentInUrl = redirectUri + '#access_token=';
                var domainPathAndFrag = currentTabUrl.slice(0, 57);

                if (domainPathAndFrag !== ATFragmentInUrl) {
                    $("#new-handle-form").remove();
                    $('a').attr('href', authLink);
                } else {
                    $("#step-one").remove();
                    $('form')
                        .submit(function (e) {
                            console.log('SUBMIT', e)
                            var newHandleOne = $('#handle-one').val();
                            storage.setItem('handleOne', newHandleOne);
                            var newHandleTwo = $('#handle-two').val();
                            storage.setItem('handleTwo', newHandleTwo);
                            var accessToken = currentTabUrl.slice(57, currentTabUrl.length);
                            storage.setItem('accessToken', accessToken);
                        });
                }
            })
    } else {
        $('button').remove();
        $('#submit-handles').remove();
        $('form')
            .submit(function (e) {
                var newHandleOne = $('#handle-one').val();
                storage.setItem('handleOne', newHandleOne);
                var newHandleTwo = $('#handle-two').val();
                storage.setItem('handleTwo', newHandleTwo);
            });
    }
})
