var storage = window.localStorage;

$(document).ready(function () {

    //fetch from local storage
    $('i').text(storage.getItem('currentTag'))

    //new tag
    $('input').keyup(
        function (e) {
            if (e.keyCode === 13) {
                $('form').submit();
            }
        }
    );

    $('form').submit(function (e) {
        var currentInput = $('input').val().replace(/\s+/g, '');
        storage.setItem('currentTag', currentInput);
        $('i').text(storage.getItem('currentTag'));
        e.preventDefault();
    });

})

