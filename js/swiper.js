export function swiperInit() {
    console.log("ED22222!!!!");
  $(".content_swiper").each(function () {
    const $slider = $(this).find(".swiper.is-slider-team");

    if (!$slider.length) return;

    //console.log("running SWIPER JS", $slider[0]);


    const slider1 = new Swiper($slider[0], {
      autoHeight: false,
      followFinger: true,
      slideToClickedSlide: false,
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });
  });
}