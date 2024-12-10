"use strict";

// ===== init =====
const init = () => {
  // # app-height
  appHeight();
  // # lenis
  initLenis();
};

// ===== appheight =====
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(
    "--app-height",
    `${document.documentElement.clientHeight}px`
  );
};
window.addEventListener("resize", appHeight);

// ===== lenis =====
const initLenis = () => {
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
};

// ===== lazy loading =====
const ll = new LazyLoad({
  threshold: 0,
});

// ### ===== DOMCONTENTLOADED ===== ###
window.addEventListener("DOMContentLoaded", init);
