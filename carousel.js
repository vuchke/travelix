$(".owl-carousel").owlCarousel({
  navText: ["", ""],
  rewindNav: true,
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 1200,
  autoplayHoverPause: true,
  slideTransition: "ease-in-out",
  navSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
