
$(document).ready(function() {
    console.log("char-counter: dom ready");

    $('textarea').on('keypress', (event) =>{
        console.log("key!");
    })
});