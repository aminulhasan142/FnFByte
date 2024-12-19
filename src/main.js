// Swiper JS Initialize ---------------------------------------------------------------------- Swiper JS Initialize --------------------------------------
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var slider1 = new Swiper(".slider1", {
  direction: getDirection(),
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 768 ? "horizontal" : "vertical";

  return direction;
}

//---------------------------------------------------------------- Swiper Intializer End----------------------------------------------

// swiper for textimonial

var slider2 = new Swiper(".slider2", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
