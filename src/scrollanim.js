var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight + 100 || document.documentElement.clientHeight + 100))
  );
}