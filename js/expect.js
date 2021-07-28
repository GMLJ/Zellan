var controllerExpect = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 500 },
});

new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Art", "expect__ArtPop") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Content", "expect__ContentPop") // add class toggle
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Event", "expect__EventPop") // add class toggle
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Workshop", "expect__WorkshopPop") // add class toggle
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Artisan", "expect__ArtisanPop") // add class toggle
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Film", "expect__FilmPop") // add class toggle
  .addTo(controllerExpect);
new ScrollMagic.Scene({ triggerElement: ".expect__txt" })
  .setClassToggle(".expect__Hub", "expect__HubPop") // add class toggle
  .addTo(controllerExpect);
