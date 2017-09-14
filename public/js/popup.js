var storage = window.localStorage;
var Promise = require ('bluebird')

$(document).ready(function () {
    var handle0 = storage.getItem('handle0');
    var handle1 = storage.getItem('handle1');

    $('form')
        .submit(function () {
            var newHandle0 = $('#handle0').val();
            storage.setItem('handle0', newHandle0);
            var newHandle1 = $('#handle1').val();
            var newHandle1NotValid = (newHandle1 === null || newHandle1 === '')
            if (newHandle1NotValid === true) {
                storage.setItem('handle1', handle1)
            } else {
                storage.setItem('handle1', newHandle1);
            }  

            $('#submit-handles').attr('value', 'Done!')      
        })
})
