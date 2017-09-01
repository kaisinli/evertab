// fetches user input


$(document).ready(function () {

    $("form").submit(function (e) {
        var currentInput = $('input').val();
        $("i").text(currentInput);
        e.preventDefault();
    });

    $("input").keyup(
        function (e) {
            var currentInput = $(this).val();
            if (e.keyCode === 13) {
                $("form").submit();
            }
        }
    );
    
})