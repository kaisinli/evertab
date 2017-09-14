'use strict'

import displayMul from './utils'
var storage = window.localStorage;
var handle0 = storage.getItem('handle0');
var handle1 = storage.getItem('handle1');


$(document).ready(function () {
    if (handle0 === null) {
        $('#div0').remove();
        $('#div1').remove();
        $('body').addClass('not-authenticated');
    } else if (handle1 === null || handle1 === '' || handle0 === handle1) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');
        $.getJSON(`https://www.instagram.com/${handle0}/media/`, function (data) {
            console.log(data)
            var content = data.items;

            for (var i = 0; i < 2; i++) {
                var igUrl = content[i].link;
                var contentUrl = '';

                if (content[i].videos) {
                    contentUrl = content[i].videos.standard_resolution.url;
                    console.log(i, contentUrl)
                    $('#content' + i).attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
                } else {
                    contentUrl = content[i].images.standard_resolution.url;
                    console.log(i, contentUrl)
                    $('#content' + i).attr('href', igUrl).append(`<img src = ${contentUrl}>`)
                }
            }
        })
    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.getJSON(`https://www.instagram.com/${handle0}/media/`, function (data) {
            var content = data.items
            var igUrl = content[0].link;

            var contentUrl = ''
            var ig
            if (content[0].videos) {
                contentUrl = content[0].videos.standard_resolution.url;
                $('#content0').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
            } else {
                contentUrl = content[0].images.standard_resolution.url;
                $('#content0').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })

        $.getJSON(`https://www.instagram.com/${handle1}/media/`, function (data) {
            var content = data.items
            var contentUrl = ''
            var igUrl = content[0].link;


            if (content[0].videos) {
                contentUrl = content[0].videos.standard_resolution.url;
                $('#content1').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
            } else {
                contentUrl = content[0].images.standard_resolution.url;
                $('#content1').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })


    }
})


