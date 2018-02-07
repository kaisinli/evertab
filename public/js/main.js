'use strict'

var storage = window.localStorage;
var handle0 = storage.getItem('handle0');
var handle1 = storage.getItem('handle1');

console.log(handle0, handle1)

$(document).ready(function () {
    if (handle0 === null) {
        $('#div0').remove();
        $('#div1').remove();
        $('body')
            .addClass('not-authenticated')
            .append('<div class="intro-page"><h1>Please click the Evertab icon to begin.</h1></div>');
    } else if (handle1 === null || handle1 === '' || handle1 === handle0) {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');
        
        $.getJSON(`https://www.instagram.com/${handle0}/?__a=1`, function (data) {
            var content = data.user.media.nodes;
            var contentGroup = [];

            for (var i = 0; i <= 1; i++) {
                contentGroup.push(content[i])
            }

            contentGroup.forEach((media, index) => {
                var code = media.code;
                var igUrl = `https://www.instagram.com/p/${code}`;
                var contentUrl = '';
                
                console.log("url", igUrl)

                if (media.is_video === true) {
                    $.getJSON(`https://www.instagram.com/p/${code}/?__a=1`, function (data) {
                        contentUrl = data.graphql.shortcode_media.video_url;
                        $('#content' + index).attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
                    })
                } else {
                    contentUrl = media.thumbnail_src;
                    $('#content' + index).attr('href', igUrl).append(`<img src = ${contentUrl}>`);
                }
            })   
        })
    } else {
        $('.intro-page').remove();
        $('body').removeClass('not-authenticated');

        $.getJSON(`https://www.instagram.com/${handle0}/?__a=1`, function (data) {
            var content = data.user.media.nodes;
            var code = content[0].code;
            var igUrl = `https://www.instagram.com/p/${code}`;
            var contentUrl = ''

            if (content[0].is_video === true) {
                $.getJSON(`https://www.instagram.com/p/${code}/?__a=1`, function (data) {
                    contentUrl = data.graphql.shortcode_media.video_url;
                    $('#content0').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
                })
            } else {
                contentUrl = content[0].thumbnail_src;
                $('#content0').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })

        $.getJSON(`https://www.instagram.com/${handle1}/?__a=1`, function (data) {
            var content = data.user.media.nodes;
            var code = content[0].code;
            var igUrl = `https://www.instagram.com/p/${code}`;
            var contentUrl = ''

            if (content[0].is_video === true) {
                $.getJSON(`https://www.instagram.com/p/${code}/?__a=1`, function (data) {
                    contentUrl = data.graphql.shortcode_media.video_url;
                    $('#content1').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
                })
            } else {
                contentUrl = content[0].thumbnail_src;
                $('#content1').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
            }
        })
    }

    // add caption
    $('#content0').append('')
    
})