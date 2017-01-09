! function(t) {
  "use strict";
  const controller = new ScrollMagic.Controller();

  const setSceneTween = (tween, sceneOptions, label) => {
    new ScrollMagic.Scene(sceneOptions)
    .setTween(tween)
    // .addIndicatorsname: label || sceneOptions.triggerElement || "first section"})
    .addTo(controller)
  }

  const setActiveMenuTween = (activeIndex, activeColor) => {
    return TweenMax.to(`#menu li:nth-child(${activeIndex}) > a`, 1,
                                {
                                  color: activeColor,
                                  onStart: () => {
                                    TweenMax.to("#menu li > a", 0, {color:"white"})
                                  }})
  }

  const setMenuTweens = () => {
    const highlightColor = "#d0ce43";
    ["one", "two", "three", "four", "last"].forEach( (item, index) => {
      const scene = {triggerElement: `#${item}`, duration: "300px"}
      setSceneTween(TweenMax.to(`#${item}  h2.text-primary`, 1, {fontSize: 45, color: highlightColor}), scene, `menu-${item}`);
      setSceneTween(setActiveMenuTween(index+1, highlightColor), scene, `menu-${item}`);
      setSceneTween(TweenMax.from(`#${item}`, 1, {backgroundColor:"black"}), scene, `menu-${item}`);
    })
  }

  const setScrollToTween = () => {
    ["one", "two", "three", "four", "last"].forEach((item, index) => {
      $(`#menu li:nth-child(${index+1}) > a`).click((e) => {
        TweenMax.to(window, 1, {scrollTo: `#${item}`})
        e.preventDefault();
      })
    })
    $('.navbar-header > a').click((e) => {
      TweenMax.to(window, 1, {scrollTo: '#first'})
      e.preventDefault();
    })
  }

  // for div one trigger
  const sceneOneOptions = {triggerElement: "#one", duration: 200, offset: 0};
  const logoTween = TweenMax.to(".logo-container", 1, {color: "rgb(23, 184, 111)"});
  const topNavBgTween = TweenMax.to("#topNav", 1, {backgroundColor: "black"});

  // for div two trigger
  const sceneTwoOptions = {triggerElement: "#two", duration: 200, offset: 0};

  setSceneTween(logoTween, sceneOneOptions);
  setSceneTween(topNavBgTween, sceneOneOptions);
  setMenuTweens();
  setScrollToTween();

  $('#four .container:nth-child(2) > .row').click(function () {
    $('#four iframe').css("pointer-events", "auto");
  });

  $('#four .container:nth-child(2) > .row').mouseleave(function() {
    $('#four iframe').css("pointer-events", "none");
  });
}(jQuery);
