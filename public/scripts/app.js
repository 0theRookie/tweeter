const tweetData = {
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
}


function createTweetElement(data) {

    const $articleElm = $("<article>").addClass("tweet");// make article
    let $postedTweet = $articleElm.append(data.content.text); //shove text from database in there

    return $postedTweet;
}


const $tweet = createTweetElement(tweetData);




console.log($tweet); // to see what it looks like
$('#tweets-container').prepend($tweet);