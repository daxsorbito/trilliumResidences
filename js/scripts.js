! function(t) {
  "use strict";
  const controller = new ScrollMagic.Controller();

  const setSceneTween = (tween, sceneOptions) => {
    new ScrollMagic.Scene(sceneOptions)
    .setTween(tween)
    .addIndicators({name: "first section"})
    .addTo(controller)
  }

  const setMenuTween = (activeIndex) => {
    return TweenMax.to(`#menu li:nth-child(${activeIndex}) > a`, 1,
                                {
                                  color:"rgb(153,101,21)",
                                  onStart: () => {
                                    TweenMax.to("#menu li > a", 0, {color:"white"})
                                  }})
  }
  // for div one trigger
  const sceneOneOptions = {triggerElement: "#one", duration: 200, offset: 0};
  const logoTween = TweenMax.to(".logo-container", 1, {color: "rgb(23, 184, 111)"});
  const topNavBgTween = TweenMax.to("#topNav", 1, {backgroundColor: "black"});
  const sectionHeader = TweenMax.to("#one  h2.text-primary", 1, {color:"orange"})
  const setAllMenu = TweenMax.to("#menu li > a", 1, {color:"white"})

  // for div two trigger
  const sceneTwoOptions = {triggerElement: "#two", duration: 200, offset: 0};

  setSceneTween(logoTween, sceneOneOptions);
  setSceneTween(topNavBgTween, sceneOneOptions)
  setSceneTween(sectionHeader, sceneOneOptions)
  setSceneTween(setMenuTween(1), sceneOneOptions)
  setSceneTween(setMenuTween(2), sceneTwoOptions)

}(jQuery);
