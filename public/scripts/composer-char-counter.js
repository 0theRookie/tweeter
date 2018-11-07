
$(document).ready(function() {
    console.log("DOM Ready");

    $('textarea').on('keypress', function(event) {
        console.log("Keypress!");
    })
});