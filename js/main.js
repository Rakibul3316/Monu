$(document).ready(function () {
  // Mobile Menu
  $("#mobile-menu").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
  });

  //Slider Area
  $(".slider-active").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

  //Testimonial slider

  $(".testimonial-active").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
  });

  //Testimonial slider

  $(".brand-active").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //Counter js

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
