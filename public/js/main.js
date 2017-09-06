import authLink from '../../secrets.js'
var storage = window.localStorage;

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');

    $('form')
        .attr('method', 'post')
        .attr('action', authLink)
        .submit(function (e) {
            var newHandleOne = $('#handle-one').val();
            storage.setItem('handleOne', newHandleOne);
            var newHandleTwo = $('#handle-two').val();
            storage.setItem('handleTwo', newHandleTwo);
        })

})
