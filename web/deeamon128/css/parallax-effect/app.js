function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function() {
  parallax("header", window.scrollY, 1);
  parallax(".first-bitcoin", window.scrollY, 0.2 )
  parallax(".second-bitcoin", window.scrollY, 0.1 )
})
