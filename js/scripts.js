! function(t) {
    "use strict";
    t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 60
    }), t("#topNav").affix({
        offset: {
            top: 200
        }
    }), (new WOW).init(), t("a.page-scroll").bind("click", function(a) {
        var e = t(this);
        t("html, body").stop().animate({
            scrollTop: t(e.attr("href")).offset().top - 60
        }, 1450, "easeInOutExpo"), a.preventDefault()
    }), t(".navbar-collapse ul li a").click(function() {
        t(".navbar-toggle:visible").click()
    }), t("#galleryModal").on("show.bs.modal", function(a) {
        t("#galleryImage").attr("src", t(a.relatedTarget).data("src"))
    })
}(jQuery);
