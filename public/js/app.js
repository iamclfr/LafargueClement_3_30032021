$(document).ready(function() {
    $("#scrollTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $("#link").click(function(event) {
        event.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#restaurants").offset().top
        }, 500);
    });
});