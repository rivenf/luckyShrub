/* Navigation dropdown */
$("#menuIcon").click(function(){
  $(".navDropdown").toggleClass("active");
});

/* Log form values to the console */
/* const form = document.getElementById("quoteForm");
const submitter = document.getElementById("submitBtn");
const formData = new FormData(form, submitter);

function logData() {
  console.log(formData);
}

submitBtn.addEventListener('click', logData); */

/* Slideshow */
const slides = document.getElementsByClassName('slide');

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}
function prevSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';
}

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);