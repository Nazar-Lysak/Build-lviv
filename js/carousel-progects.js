const prevBtn = document.querySelector(".carousel_review__prev");
const nextBtn = document.querySelector(".carousel_review__next");
const slidesImg = document.querySelectorAll(".goods-img__item");
const dotsCarousel = document.querySelectorAll(".carousel-row__dot");
const ImgsMinCarousel = document.querySelectorAll(".img-min");

let num = 0;

const activeSlideCarousel = (x) => {
  for (slideImg of slidesImg) {
    slideImg.classList.remove("actives");
  }
  slidesImg[x].classList.add("actives");
};

const activeDotCarousel = (x) => {
  for (dotImg of dotsCarousel) {
    dotImg.classList.remove("actives");
  }
  dotsCarousel[x].classList.add("actives");
};

const activeImgMinCarousel = (x) => {
  for (ImgMinCarousel of ImgsMinCarousel) {
    ImgMinCarousel.classList.remove("active");
  }
  ImgsMinCarousel[x].classList.add("active");
};

const prepareCurrentCarousel = (number) => {
  activeSlideCarousel(number);
  activeDotCarousel(number);
  activeImgMinCarousel(number);
};

const nextSlideCarousel = () => {
  if (num == slidesImg.length - 1) {
    num = 0;
    prepareCurrentCarousel(num);
  } else {
    num++;
    prepareCurrentCarousel(num);
  }
};

const prevSlideCarousel = () => {
  if (num == 0) {
    num = slidesImg.length - 1;
    prepareCurrentCarousel(num);
  } else {
    num--;
    prepareCurrentCarousel(num);
  }
};

dotsCarousel.forEach((itemCarousel, numDot) => {
  itemCarousel.addEventListener("click", () => {
    num = numDot;
    prepareCurrentCarousel(num);
  });
});

ImgsMinCarousel.forEach((itemCarousel, numDot) => {
  itemCarousel.addEventListener("click", () => {
    num = numDot;
    prepareCurrentCarousel(num);
  });
});

nextBtn.addEventListener("click", nextSlideCarousel);
prevBtn.addEventListener("click", prevSlideCarousel);

setInterval(nextSlideCarousel, 4000);
