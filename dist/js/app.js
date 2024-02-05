const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px

    // when window width is >= 480px
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },

  // And if we need scrollbar
});
const btnScrollTo = Array.from(document.querySelectorAll(".btn--scroll-to"));
const article = document.querySelector("#section--article");
const contract = document.querySelector("#section--contract");
const tutorial = document.querySelector("#section--tutorial");
const sectionMap = new Map([
  ["section--article", article],
  ["section--contract", contract],
  ["section--tutorial", tutorial],
]);
btnScrollTo.forEach((element) => {
  element.addEventListener("click", function (e) {
    sectionMap
      .get(element.dataset.scrollto)
      .scrollIntoView({ behavior: "smooth" });
  });
});
