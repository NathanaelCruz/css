export const activeGliderCarousel = () => {
  const $carousel = document.querySelector(".carousel__content");

  new Glider($carousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: ".carousel-dots",

    responsive: [
      {
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
};
