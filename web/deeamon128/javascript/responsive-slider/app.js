const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prvBtn');
const next = document.querySelector('#nxtBtn');

// Auto Scroll
const auto = false;
const intervalTime = 1;
let slideInterval

const nextSlide = () => {
  // Grab current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide - sibling
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current')
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
  nextSlide();
})

const prevSlide = () => {
  // Grab current class
  const current = document.querySelector('.current');
  // Remove the current class
  current.classList.remove('current');
  // Check for next slide - sibling
  if (current.previousElementSibling) {
    // Add current to previous sibling
    current.previousElementSibling.classList.add('current')
  } else {
    // Add current to start
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

prev.addEventListener('click', e => {
  prevSlide();
})
