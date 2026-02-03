const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Open envelope → go to question
openBtn.addEventListener("click", () => {
  slide1.classList.remove("active");
  slide2.classList.add("active");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

// YES → final slide
yesBtn.addEventListener("click", () => {
  slide2.classList.remove("active");
  slide3.classList.add("active");
});

// NO button dodges mouse
noBtn.addEventListener("mouseenter", () => {
  const parent = noBtn.parentElement;
  const maxX = parent.offsetWidth - noBtn.offsetWidth;
  const maxY = parent.offsetHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});