var storage = window.localStorage;
var accessToken = storage.getItem('accessToken');

$(document).ready(function () {
    var handleOne = storage.getItem('handleOne');
    var handleTwo = storage.getItem('handleTwo');
    var accessToken = storage.getItem('accessToken');

    if (accessToken === null) {
        $('#left-content').remove();
        $('#right-content').remove();
        $('body').addClass('not-authenticated');
    } else if (handleTwo === null || handleOne === handleTwo) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');
    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');
        $.ajax({
            url: `https://api.instagram.com/v1/users/1461554942/media/recent`, 
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, count: 1 },
            success: function (data) {
                console.log('success',data.data);
            },
            error: function (data) {
                console.log(data); // send the error notifications to console
            }
        })
    }
});
