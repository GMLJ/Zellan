// let controller = new ScrollMagic.Controller(); // activates the controller: to be done everytime.
// let timeline = new TimelineMax();
// let timelineTwo = new TimelineMax();

// timeline.fromTo(".camelLadyImage", 3, { y: 0, duration: 1 }, { y: -600 });

// let scene = new ScrollMagic.Scene({
//   triggerElement: ".trigger1",
//   duration: "200%",
//   triggerHook: 0,
// })
//   .setTween(timeline)
//   .addTo(controller);

// timelineTwo.fromTo(".oasisImage", 3, { y: 0, duration: 1 }, { y: -600 });

// let sceneTwo = new ScrollMagic.Scene({
//   triggerElement: ".trigger2",
//   duration: "200%",
//   triggerHook: 0,
// })
//   .setTween(timelineTwo)
//   .addTo(controller);

var viewportwidth;
var viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != "undefined") {
  (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
else if (
  typeof document.documentElement != "undefined" &&
  typeof document.documentElement.clientWidth != "undefined" &&
  document.documentElement.clientWidth != 0
) {
  (viewportwidth = document.documentElement.clientWidth),
    (viewportheight = document.documentElement.clientHeight);
}

// older versions of IE
else {
  (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
    (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
}
document.write(
  "<p>Your viewport width is " + viewportwidth + "x" + viewportheight + "</p>"
);
//-->

let controllerParallax = new ScrollMagic.Controller(); // activates the controller: to be done everytime.
let timeline = new TimelineMax();
let timelineTwo = new TimelineMax();

if (viewportwidth >= 1400) {
  timeline.fromTo(".camelLadyImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    duration: "200%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .addTo(controllerParallax);

  timelineTwo.fromTo(".oasisImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    duration: "200%",
    triggerHook: 0,
  })
    .setTween(timelineTwo)
    .addTo(controllerParallax);
} else if (viewportwidth > 768) {
  timeline.fromTo(".camelLadyImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    duration: "350%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .addTo(controllerParallax);

  timelineTwo.fromTo(".oasisImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    duration: "200%",
    triggerHook: 0,
  })
    .setTween(timelineTwo)
    .addTo(controllerParallax);
} else {
  timeline.fromTo(".camelLadyImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    duration: "350%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .addTo(controllerParallax);

  timelineTwo.fromTo(".oasisImage", 3, { y: 0, duration: 1 }, { y: -600 });

  let sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    duration: "550%",
    triggerHook: 0,
  })
    .setTween(timelineTwo)
    .addTo(controllerParallax);
}
