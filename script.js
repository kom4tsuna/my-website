$(function() {
    $('a[href^="#"]').click(function(e) {

        if ($(this).attr('id') === 'topBtn') {
            return;
        }

        e.preventDefault();

        const target = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });
});

$(function() {

    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('#topBtn').addClass('show');
        } else {
            $('#topBtn').removeClass('show');
        }

    });

    $('#topBtn').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800, 'swing');
    });

});