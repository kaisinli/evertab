var storage = window.localStorage;
var Promise = require('bluebird')

$(document).ready(function () {
    var handle0 = storage.getItem('handle0');
    var handle1 = storage.getItem('handle1');

    $('form')
        .submit(function () {
            var newHandle0 = $('#handle0').val().toLowerCase().trim();
            storage.setItem('handle0', newHandle0);

            if ($('#handle1').val()) {
                var newHandle1 = $('#handle1').val().toLowerCase().trim();
                storage.setItem('handle1', newHandle1);
            }            
        })
})
