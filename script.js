const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.querySelector(".wrapper");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showOnly(target) {
  [slide1, slide2, slide3].forEach(s => s.classList.remove("active"));
  target.classList.add("active");
}

function resetNoButtonPosition() {
  // Put "No" back to its starting spot (right side)
  noBtn.style.left = "";
  noBtn.style.top = "50%";
  noBtn.style.right = "10px";
  noBtn.style.transform = "translateY(-50%)";
}

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  // Show Happy Valentine's first
  showOnly(slide1);
  resetNoButtonPosition();

  // Then show the question after a moment
  setTimeout(() => {
    showOnly(slide2);
    resetNoButtonPosition();
  }, 1200);
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";

  showOnly(slide1);
  resetNoButtonPosition();
});

yesBtn.addEventListener("click", () => {
  showOnly(slide3);
});

noBtn.addEventListener("mouseenter", () => {
  // Dodge inside the answer-buttons container
  const parent = noBtn.parentElement; // .answer-buttons
  const maxX = parent.clientWidth - noBtn.offsetWidth;
  const maxY = parent.clientHeight - noBtn.offsetHeight;

  const x = Math.max(0, Math.floor(Math.random() * maxX));
  const y = Math.max(0, Math.floor(Math.random() * maxY));

  noBtn.style.right = "auto";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
});
