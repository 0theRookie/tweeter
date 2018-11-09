$(() => {
loadTweets();

let data = [];

$(function () {
  const $composeBox = $('#composeBox').hide();
  $('#composeHeader').click(() => {
    $composeBox.slideToggle();
    $('#addTweet').focus();
  })
});


$(function () {
  const $form = $("form");
  const $text = $("#addTweet");
  const $err = $('<div>').prop('id', 'err').appendTo('#composeBox').hide();

  $form.submit((event) => {
    event.preventDefault();
    console.log("Button clicked\nMaking AJAX request...");

    if ($text.val().length > 140)  {
      console.log("Request halted");
      $err.slideDown().text("Invalid Entry! Maximum 140 characters");
    } else if (!$text.val().length) {
      console.log("Request halted");
      $err.slideDown().text("Invalid Entry! Please fill out the text field");
    } else {
      $err.slideUp();
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $form.serialize()
      }).then(
        function () {
          loadTweets();        
        }).fail(
          function (jqXHR, textStatus, errorThrown) {
            console.log("GOSH DARN IT!", textStatus, errorThrown)
        })
        $form[0].reset();
    }
  })

})


function renderTweets(tweets) {
     // loops through tweets
    for(let i = 0; i < tweets.length; i++) {
        const $tweet = createTweetElement(tweets[i]);// calls createTweetElement for each tweet cd
        let $appendedTweet = $('.tweet-container').prepend($tweet);// takes return value and appends it to the tweets container
      
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

function loadTweets() {
  $.get("/tweets").then(
    (tweets) => {
      renderTweets(tweets);
    }
  )
}

});