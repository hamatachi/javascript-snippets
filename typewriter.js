
$(document).ready(function (){

    const textToType = $('#example').text();

    $('#example').text('');

    let i = 0;

    function typeWriter(){
        $('#example').append(textToType.charAt(i));
        i++;
        if (i < textToType.length){
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
})