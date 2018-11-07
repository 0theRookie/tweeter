
$(function() {
    console.log("DOM ready");

    const textArea = $('textarea');
    const maxChar = 140;

    
    textArea.on('input', function(event) {
        console.log("textArea text length: ", this.textLength);
        const $counter = $(this).parent().children('.counter');
        let curntCharCount = $counter.text(maxChar - this.textLength);
        
        if(curntCharCount.text() <= 0) {
        $counter.css('color', 'red');
        };
   
    });

   
});