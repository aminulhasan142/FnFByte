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

// ------------------------------------------------------------------- accordion js start ----------------------------------------------
const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const toggles = accordion.querySelectorAll(".toggle");
    const icon = document.querySelector(".accordion-icon");

    // Loop through each toggle and apply classList.toggle
    toggles.forEach((toggle) => {
      toggle.classList.toggle("hidden");
    });

    if (icon.textContent === "keyboard_arrow_down") {
      icon.textContent = "keyboard_arrow_up";
    } else {
      icon.textContent = "keyboard_arrow_down";
    }
  });
});
