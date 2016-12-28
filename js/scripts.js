! function(t) {
  "use strict";

  var controller = new ScrollMagic.Controller();

  var logoTween = TweenMax.fromTo(".logo-container", 1,
                          {color: "#FFF"},
                          {color: "rgb(23, 184, 111)"}
                         );

  var scene = new ScrollMagic.Scene({triggerElement: "#one", duration: 200, offset: -50})
                  .setTween(logoTween)
                  .addIndicators({name: "first section"})
                  .addTo(controller)

}(jQuery);
