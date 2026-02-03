const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showOnly(which) {
  [slide1, slide2, slide3].forEach(s => s.classList.remove("active"));
  which.classList.add("active");
}

// When you click Open: show Slide 1, then auto-advance to Slide 2 after 2 seconds
openBtn.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  showOnly(slide1);

  setTimeout(() => {
    showOnly(slide2);
  }, 2000);
});

// Close: reset back to slide1
closeBtn.addEventListener("click", () => {
  document.querySelector(".wrapper").classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";

  showOnly(slide1);
});

// YES -> slide3
yesBtn.addEventListener("click", () => {
  showOnly(slide3);
});

// NO dodges
noBtn.addEventListener("mouseenter", () => {
  const parent = noBtn.parentElement;
  parent.style.position = "relative";

  noBtn.style.position = "absolute";

  const maxX = parent.offsetWidth - noBtn.offsetWidth;
  const maxY = parent.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
