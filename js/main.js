$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 300) {
            $('.top').fadeIn(400);
        } else {
            $('.top').fadeOut(400);
        }
    });

    $('.top').on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
});

