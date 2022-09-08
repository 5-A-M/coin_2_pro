$(function () {
    $("#slide").sliderPro({
      width: "50vw",
      height: "40vh",
      arrows: false,
      buttons: false,
      slideDistance: 0,
      waitForLayers: true,
      thumbnailWidth: 200,
      thumbnailHeight: 55,
      thumbnailPointer: true,
      autoplay: false,
      autoScaleLayers: false,
      breakpoints: {
        1000: {
          width: 400,
          height: 565,
          arrows: false,
          thumbnailWidth: 8,
          thumbnailHeight: 8,
        },
      },
    });
  });