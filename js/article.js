var controllerarticle = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 500 },
});

new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Art", "article__ArtPop") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Content", "article__ContentPop") // add class toggle
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Event", "article__EventPop") // add class toggle
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Workshop", "article__WorkshopPop") // add class toggle
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Artisan", "article__ArtisanPop") // add class toggle
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Film", "article__FilmPop") // add class toggle
  .addTo(controllerarticle);
new ScrollMagic.Scene({ triggerElement: ".article__txt" })
  .setClassToggle(".article__Hub", "article__HubPop") // add class toggle
  .addTo(controllerarticle);
