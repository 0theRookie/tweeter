$(() => {
let data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    },
    {
        "user": {
            "name": "Sheev Palpatine",
            "avatars": {
                "large": "https://2.bp.blogspot.com/-sNRJju80fWg/UXFNO8MviQI/AAAAAAAAS9M/ZPbIJ9NGrwM/s1600/senatorpalpatineepisode1.jpg"
            },
            "handle": "@theGalaxyIsMyApprentice"
        },
        "content": {
            "text": "Have YOU heard the legend of Darth Plageus the Wise?"
        },
        "created_at": "A long long time ago..."
    }
  ];


$(function () {
  const $form = $("form");
  $form.submit((event) => {
    event.preventDefault();
    console.log("Button clicked\nMaking AJAX request...");
    $.ajax().then(
      function (tweetPost) {
        console.log("Success: ", tweetPost);
      }
    )
  })
})


function renderTweets(tweets) {
     // loops through tweets
    for(let i = 0; i < tweets.length; i++) {

        const $tweet = createTweetElement(tweets[i]);// calls createTweetElement for each tweet 
        console.log("tweets: ", tweets);
        let $appendedTweet = $('.tweet-container').append($tweet);// takes return value and appends it to the tweets container
        console.log("appendedTweet: ", $appendedTweet);
    }
   
    
}

function createTweetElement({ 
    content: { text },
    user: { name, handle, avatars: { large } },
    created_at }) {
       
    const $articleElm = $("<article>").addClass("tweet"); //creating article node

    const $tweetHeader = $("<header>").appendTo($articleElm).addClass("bordered");//header of tweet
    const $tweetImg = $("<img>").prop('src', large).appendTo($tweetHeader);
    const $heading = $("<h1>").appendTo($tweetHeader).text(name);
    const $handle = $("<span>").appendTo($tweetHeader).text(handle);

    const $pTag = $("<p>").text(text).appendTo($articleElm).addClass("body");//body of tweet

    const $tweetFooter = $("<footer>").appendTo($articleElm).addClass("bordered");
    const $timestamp = $("<p>").appendTo($tweetFooter).text(created_at).addClass("footer");
    const $footerIMG = $("<img>").addClass("hover").prop("src", 
    "https://pbs.twimg.com/profile_images/663420200365113344/y_QbW_tm.png").appendTo($tweetFooter);

    return $articleElm;
}

renderTweets(data);
});