const appUrl = 'https://api.instagram.com/v1/tags/cutecats/media/recent';

$(document).ready(function () {
    $.get(appUrl, function (data) {
        $('body').html("<h1>It works!</h1>");
    })
})

