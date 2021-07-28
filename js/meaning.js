var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 500 },
});

new ScrollMagic.Scene({ triggerElement: ".meaning__title" })
  .setClassToggle(".left", "leftTranslate") // add class toggle
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: ".meaning__title" })
  .setClassToggle(".right", "rightTranslate") // add class toggle
  .addTo(controller);
