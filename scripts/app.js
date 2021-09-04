console.log("hello world");
const crousel = document.getElementById("crousel-images");
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");

const img = document.querySelectorAll("#crousel-images img");
let imgWidth = img[0].clientWidth;
console.log(imgWidth);
let idx = 0;
let run = () => {
  idx++;

  changeImage();
};

let interval = setInterval(run, 2000);

let changeImage = () => {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  crousel.style.transform = `translateX(${-idx * 1519}px)`;
};

let resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

next.addEventListener("click", () => {
  console.log("clicked");
  idx++;
  changeImage();
  resetInterval();
});

prev.addEventListener("click", () => {
  console.log("clicked");
  idx--;
  changeImage();
  resetInterval();
});

// modal script
let loginBtn = document.getElementById("login-btn");
let modal = document.getElementById("modal-container");
const outside = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("click", outside);

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  modal.style.display = "block";
});
