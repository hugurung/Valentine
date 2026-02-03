const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.querySelector(".wrapper");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMsg = document.getElementById("noMsg");

// ✅ Customize these later
const noPhrases = [
  "Don’t do this to me 😭",
  "Please say yes 🥺",
  "I’ll be sad 😢",
  "Are you sure? 😳",
  "Try again 😏"
];
let phraseIndex = 0;

function showOnly(target) {
  [slide1, slide2, slide3].forEach(s => s.classList.remove("active"));
  target.classList.add("active");
}

function resetNoButtonPosition() {
  noBtn.style.left = "";
  noBtn.style.top = "50%";
  noBtn.style.right = "6px";
  noBtn.style.transform = "translateY(-50%)";
  if (noMsg) noMsg.textContent = "";
}

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  showOnly(slide1);
  resetNoButtonPosition();

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

// Dodge + show message
noBtn.addEventListener("mouseenter", () => {
  // Show a rotating phrase
  if (noMsg) {
    noMsg.textContent = noPhrases[phraseIndex % noPhrases.length];
    phraseIndex++;
  }

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

