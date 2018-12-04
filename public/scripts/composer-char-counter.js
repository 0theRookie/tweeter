
$(function() {
    // console.log("DOM ready");
    const $form = $('form');
    const $textArea = $('textarea');
    const maxChar = 140;

    
    $textArea.on('input', function(event) {
        
        const $counter = $(this).parent().children('.counter');
        let curntCharCount = $counter.text(maxChar - this.textLength);
        //Checking if the characters is less than 0 
        if(curntCharCount.text() <= 0) {
            $counter.css('color', 'red');
        
        } else { //Checking for the else condition
            $counter.css('color', 'black');
        };
   
    });

   
});