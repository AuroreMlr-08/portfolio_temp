
/*CAROUSEL */
$(document).ready(function () {
    // Declare Carousel jquery object
    var owl = $('.owl-carousel--v1');

    // Carousel initialization
    owl.owlCarousel({
        loop: false,
        margin: 0,
        navSpeed: 500,
        nav: false,
        autoplay: false,
        rewind: true,
        items: 1,
        startPosition : 'URLHash',
        URLhashListener: true,

    })
    var owl_v2 = $('.owl-carousel--v2');

    // Carousel initialization
    owl_v2.owlCarousel({
        loop: false,
        margin: 0,
        navSpeed: 500,
        nav: true,
        autoplay: false,
        rewind: true,
        items: 1,
        startPosition : 'URLHash',
        URLhashListener: true,
        dots: false,

    })
});


/* ANIMATION DE CHARGEMENT

$(".loader").delay(4000).fadeOut(600);*/

/* EMAIL COPY TO CLIPBOARD
function copy() {
    /* Get the text field
    var copyText = document.getElementById("email");
    console.log(copyText);
    /* Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field
    document.execCommand("copy");

    /* Alert the copied text
    alert("Copied the text: " + copyText.value);

    $("#hey").click(function() {

        if (document.selection) { // IE
            var range = document.body.createTextRange();
            console.log(range);
            range.moveToElementText(document.getElementById("email"));
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            console.log(range);
            range.selectNode(document.getElementById("email"));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        document.execCommand("copy");
    });
    /*

var btnCopy = document.getElementById('copy' );
console.log(btnCopy);
btnCopy.addEventListener( 'click', function(){
    btnCopy.select();
    document.execCommand( 'copy' );
    return false;
} ); */