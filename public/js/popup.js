var storage = window.localStorage;

$(document).ready(function () {
    var handle0 = storage.getItem('handle0');
    var handle1 = storage.getItem('handle1');

    $('form')
        .submit(function () {
            var newHandle0 = $('#handle0').val();
            storage.setItem('handle0', newHandle0);
            var newHandle1 = $('#handle1').val();

            if (handle1 && newHandle1 === null)
                storage.setItem('handle1', handle1);
        });
})
