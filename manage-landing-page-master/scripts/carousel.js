export const activeGliderCarousel = () => {
  const $carousel = document.querySelector(".carousel__content");

  new Glider($carousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: ".carousel-dots",
  });
};
