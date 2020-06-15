const config = {
  type: "carousel",
  startAt: 1,
  perView: 3,
  focusAt: 1,
  gap: 30,
  // autoplay: 3000,
  animationDuration: 4000,
  hoverpause: true,
  breakpoints: {
    1024: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};
export const glide = new Glide(".glide", config).mount();
