$(() => {
loadTweets();

let data = [];

(function () {
  const $composeBox = $('#composeBox').hide();
  $('#composeHeader').click(() => {
    $composeBox.slideToggle();
    $('#addTweet').focus();
  })
})();


(function () {
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
     $('.tweet-container').empty();
    for(let i = 0; i < tweets.length; i++) {
        const $tweet = createTweetElement(tweets[i]);// calls createTweetElement for each tweet cd
        let $appendedTweet = $('.tweet-container').prepend($tweet);// takes return value and appends it to the tweets container
      
    }
   
    
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
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
    const $timestamp = $("<p>").appendTo($tweetFooter).text(timeSince(created_at)).addClass("footer");
    const $footerLike = $("<img>").addClass("hover").prop("src", 
    "https://cdn3.iconfinder.com/data/icons/blog-and-social-media-icons/512/Thumbs_Up-512.png").appendTo($tweetFooter);
    const $footerIcon = $("<img>").addClass("hover").prop("src", 
    "https://image.flaticon.com/icons/png/512/395/395841.png").appendTo($tweetFooter);
    const $footerRepost = $("<img>").addClass("hover fas fa-flag").prop("src", 
    "http://www.myiconfinder.com/uploads/iconsets/256-256-90d396bbc45f8519d224806379b326d8.png").appendTo($tweetFooter);

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