let controller = new ScrollMagic.Controller(); // activates the controller: to be done everytime.
let timeline = new TimelineMax();
let timelineTwo = new TimelineMax();

timeline.fromTo('.camelLadyImage', 3, {y:0, duration:1}, {y:-600})

let scene = new ScrollMagic.Scene({
  triggerElement: ".trigger1",
  duration:"200%",
  triggerHook:0,
})
.setTween(timeline)
.addTo(controller);

timelineTwo.fromTo('.oasisImage',3, {y:0, duration:1}, {y:-600})

let sceneTwo = new ScrollMagic.Scene({
  triggerElement: ".trigger2",
  duration:"200%",
  triggerHook:0,
})
.setTween(timelineTwo)
.addTo(controller);