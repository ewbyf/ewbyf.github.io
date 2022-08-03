let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("stop-resize-anim");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("stop-resize-anim");
  }, 400);
});