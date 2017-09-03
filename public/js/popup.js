var storage = window.localStorage;

$(document).ready(function () {
    var currentTag = storage.getItem('currentTag');
    $('i').text(currentTag)

    //user inputs new tag
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
