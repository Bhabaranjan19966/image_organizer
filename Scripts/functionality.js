$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

getinfo = (obj) => {
    var img = document.getElementById(obj);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01")
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

}
closer = (obj) => {

    var mod = document.getElementById(obj);
    console.log('called');
    var v = '' + mod.style.display;
    mod.style.display = "none";
}

show = (obj) => {
    var tag = document.getElementById(obj);
    tag.style.display = "flex";
    setTimeout(() => {
        //console.log('timed file called');
        return hide(obj);

    }, 900);

}
hide = (obj) => {
    var tag = document.getElementById(obj);
    tag.style.display = "none";

}
var last_known_scroll_position = 0;

window.addEventListener('scroll', function (e) {
    //console.log('calles');
    last_known_scroll_position = window.scrollY;

    console.log(last_known_scroll_position);
}); 