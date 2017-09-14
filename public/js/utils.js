var displayMul = function (data, index) {
    var contentUrl = '';

    var igUrl = data[index].link;
    if (data[index].videos) {
        contentUrl = data[index].videos.standard_resolution.url;
        $('#content' + index).attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        contentUrl = data[i].images.standard_resolution.url;
        $('#content' + index).attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

export var displayOneOnLeft = function (data, index) {
    var contentUrl = data[0].videos.standard_resolution.url;;
    var igUrl = data[0].link;
    if (data[0].videos) {
        $('#content0').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        $('#content0').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

export var displayOneOnright = function (data, index) {
    var contentUrl = data[0].videos.standard_resolution.url;;
    var igUrl = data[0].link;
    if (data[0].videos) {
        $('#content1').attr('href', igUrl).append(`<video autoplay loop muted><source src = ${contentUrl} type="video/mp4" ></video>`)
    } else {
        $('#content1').attr('href', igUrl).append(`<img src = ${contentUrl}>`)
    }
}

export var handleCarouselMedia = function(data){}

export default displayContent;

