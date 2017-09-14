import { displayMul, displayOneOnLeft, displayOneOnRight } from './utils'

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
    } else if (handleTwo === null || handleTwo === '' || handleOne === handleTwo) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleOne },

            success: function (data) {
                console.log('=== FOUND USER ID', data)
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 2 },
                    success: function (data) {
                        console.log(data)
                        var data = data.data;

                        for (var i = 0; i < 2; i++) {
                            displayMul(data, i)
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            },
            error: function (data) {
                console.log(data)
            }
        })

    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleOne },
            success: function (data) {
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 1 },
                    success: function (data) {
                        var data = data.data;
                        displayOneOnLeft(data, null)
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        $.ajax({
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: accessToken, q: handleTwo },
            success: function (data) {
                $.ajax({
                    url: `https://api.instagram.com/v1/users/${data.data[0].id}/media/recent`,
                    dataType: 'jsonp',
                    type: 'GET',
                    data: { access_token: accessToken, count: 1 },
                    success: function (data) {
                        var data = data.data;
                        displayOneOnRight(data, null)
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })
    }
})
