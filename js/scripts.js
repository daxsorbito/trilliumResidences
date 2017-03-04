! function(t) {
  "use strict";
  const controller = new ScrollMagic.Controller();
  const highlightColor = "#d0ce43";
  const baseColor = "#17b86f";
  const sections = ["one", "two", "three", "four","five", "six"];

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
    sections.forEach( (item, index) => {
      const scene = {triggerElement: `#${item}`, duration: "300px"}
      setSceneTween(TweenMax.to(`#${item}  h2.text-primary`, 1, {fontSize: 45, color: highlightColor}), scene, `menu-${item}`);
      setSceneTween(setActiveMenuTween(index+1, highlightColor), scene, `menu-${item}`);
      setSceneTween(TweenMax.from(`#${item}`, 1, {backgroundColor:"black"}), scene, `menu-${item}`);
    })
  }

  const setScrollToTween = () => {
    sections.forEach((item, index) => {
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
  const logoTween = TweenMax.to(".logo-container", 1, {color: baseColor });
  const topNavBgTween = TweenMax.to("#topNav", 1, {backgroundColor: "black"});

  // for div two trigger
  const sceneTwoOptions = {triggerElement: "#two", duration: 200, offset: 0};

  setSceneTween(logoTween, sceneOneOptions);
  setSceneTween(topNavBgTween, sceneOneOptions);
  setMenuTweens();
  setScrollToTween();

  // for google maps
  $('#six .container:nth-child(2) > .row').click(function () {
    $('#six iframe').css("pointer-events", "auto");
  });

  $('#six .container:nth-child(2) > .row').mouseleave(function() {
    $('#six iframe').css("pointer-events", "none");
  });

  const setSection = (parentClass, index) => {
    [1,2,3].forEach(item => {
      $(`#${parentClass} > div:nth-child(2) > div > a:nth-child(${item})`).attr('class', 'baseImglnk')
    })
    $(`#${parentClass} > div:nth-child(2) > div > a:nth-child(${index})`).attr('class', 'activeImglnk')
  }

  const setPlanSection = (index) => {
    setSection('three', index)
    $('#three > div:nth-child(2) > img').attr('src', `../images/floor-plan/plan${index}.png`)
  }

  const setUnitSection = (index) => {
    setSection('four', index);
    [2,3,4].forEach(item => {
      $(`#four > div:nth-child(2) > div:nth-child(${item})`).hide()
    })
    $(`#four > div:nth-child(2) > div:nth-child(${index+1})`).show()
  }

  setPlanSection(1);
  setUnitSection(1);
  $('#three .imageNav > a').click(function(e) {
    const aText = e.target.innerText;
    let index = 1
    if (aText.includes('5th-11th')) {
      index = 2
    } else if (aText.includes('12th-14th')) {
      index = 3
    }
    setPlanSection(index)
    e.preventDefault();
  })

  $('#four .imageNav > a').click(function(e) {
    const aText = e.target.innerText;
    let index = 1
    if (aText.includes('Studio')) {
      index = 2
    } else if (aText.includes('Single')) {
      index = 3
    }
    setUnitSection(index)
    e.preventDefault();
  })
  
  const myVar = setInterval(() => {
    let adjWidth; 
    if ($(window).width() <= 600) {
      adjWidth = 344
    } else if ($('#formget_box').css('width') === '356px') {
      adjWidth = 356
    }
    if (adjWidth) {
      $('#formget_box').width(adjWidth)
      clearInterval(myVar)
    }
  }, 500);

}(jQuery);
