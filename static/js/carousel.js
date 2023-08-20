var slidePositions = {
  slider1: 1,
  slider2: 1,
};

SlideShow(slidePositions.slider1, "slider1");
SlideShow(slidePositions.slider2, "slider2");

// Forward/Back controls
function plusSlides(n, sliderId) {
  slidePositions[sliderId] += n;
  SlideShow(slidePositions[sliderId], sliderId);
}

// Images controls
function currentSlide(n, sliderId) {
  slidePositions[sliderId] = n;
  SlideShow(slidePositions[sliderId], sliderId);
}

function SlideShow(n, sliderId) {
  var i;
  var slides = document.querySelectorAll(`#${sliderId} .Containers`);
  var circles = document.querySelectorAll(`#${sliderId} .dots`);

  if (n > slides.length) {
    slidePositions[sliderId] = 1;
  }
  if (n < 1) {
    slidePositions[sliderId] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("enable");
  }

  slides[slidePositions[sliderId] - 1].style.display = "block";
  circles[slidePositions[sliderId] - 1].classList.add("enable");
}
