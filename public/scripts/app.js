$(function () {
    console.log('DOM Ready');
    const tweetArticle = $('article.tweet');

    tweetArticle.on('mouseover', function(event) {
        console.log("moused over");
    })



})

