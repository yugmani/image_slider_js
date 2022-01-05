const photos = [
  "akin-unsplash.jpg",
  "amazing_background.webp",
  "chris-henry-1-Mq2LbM1NQ-unsplash.jpg",
  "compute-ea4c57a4.png",
  "DSC07201.JPG",
  "free_website_wallpaper_backgrounds_012.jpg",
  "I2toRh.jpeg",
  "patrick-hendry-x5GFGHgTgB4-unsplash.jpg",
  "pawel-czerwinski-reREeOonoDo-unsplash.jpg",
  "spinning.jpg",
  "traf-ukTd6UiQbLQ-unsplash.jpg",
];

const containerEl = document.querySelector(".container");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const legendEl = document.querySelector(".legend");
let index = 0;

const slidePreviousImage = () => {
  index--;
  if (index === -1) {
    index = photos.length - 1;
  }
  containerEl.style.background = `url(./image/${photos[index]})center/cover no-repeat`;
  legendEl.textContent = index + 1;
};

prevBtn.addEventListener("click", slidePreviousImage);

const slideNextImage = () => {
  index++;
  if (index === photos.length) {
    index = 0;
  }
  containerEl.style.background = `url(./image/${photos[index]})center/cover no-repeat`;
  legendEl.textContent = index + 1;
};

nextBtn.addEventListener("click", slideNextImage);
