"use strict";

// ===== init =====
const init = () => {
  // # app-height
  appHeight();
  // # init loading
  initLoading();
};

// ===== add event on multiple element =====
const addEventOnElements = function (elements, eventType, callback) {
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
};

// ===== lenis =====
const lenis = new Lenis({
  lerp: 0.05,
  smoothWheel: true,
});
lenis.on("scroll", (e) => {});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===== appheight =====
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(
    "--app-height",
    `${document.documentElement.clientHeight}px`
  );
};
window.addEventListener("resize", appHeight);

// ===== swiper top =====
const topSwiper = new Swiper("[data-top-swiper]", {
  effect: "fade",
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  on: {
    init: function (swiper) {
      swiper.autoplay.stop();
    },
    slideChange: function (swiper) {
      if (swiper.activeIndex == swiper.slides.length - 1) {
        swiper.autoplay.stop();
      }
    },
  },
});

// ===== init loading =====
const [loading, loadingLogo] = [
  document.querySelector("[data-loading]"),
  document.querySelector("[data-loading-logo]"),
];
const initLoading = function () {
  // ##
  lenis.stop();
  setTimeout(() => {
    loadingLogo.classList.add("--fadein");
  }, 800);
  // ##
  setTimeout(function () {
    loading.classList.add("--done");
    setTimeout(() => {
      lenis.start();
      topSwiper.autoplay.start();
    }, 1000);
  }, 2400);
};

// ===== lazy loading =====
const ll = new LazyLoad({
  threshold: 0,
});

// ### ===== DOMCONTENTLOADED ===== ###
window.addEventListener("DOMContentLoaded", init);
