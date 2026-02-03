const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.getElementById("wrapper");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answerArea = document.getElementById("answerArea");

const noWrap = document.querySelector(".no-wrap");
const noText = document.getElementById("noText");

// ✅ Customize these later
const noMessages = [
  "Don’t do this to me 😭",
  "Pleaseeeee? 🥺",
  "That hurts 😢",
  "Think again 😳",
  "We’d be so cute together 💕",
];
let msgIndex = 0;

function showScreen(target) {
  [screen1, screen2, screen3].forEach(s => s.classList.remove("active"));
  target.classList.add("active");
}

function resetNoButton() {
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.right = "0";
  noBtn.style.bottom = "0";
}

function moveNoButtonRandom() {
  const pad = 10;
  const maxX = answerArea.clientWidth - noBtn.offsetWidth - pad;
  const maxY = answerArea.clientHeight - noBtn.offsetHeight - pad;

  const x = Math.max(pad, Math.floor(Math.random() * maxX));
  const y = Math.max(pad, Math.floor(Math.random() * maxY));

  noBtn.style.right = "auto";
  noBtn.style.bottom = "auto";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  setTimeout(() => {
    showScreen(screen2);
    resetNoButton();
  }, 1200);
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  showScreen(screen1);
});

yesBtn.addEventListener("click", () => {
  showScreen(screen3);
});

// Show message + dodge
noBtn.addEventListener("mouseenter", () => {
  msgIndex = (msgIndex + 1) % noMessages.length;
  noText.textContent = noMessages[msgIndex];

  noWrap.classList.add("show-text");
  moveNoButtonRandom();

  setTimeout(() => noWrap.classList.remove("show-text"), 900);
});

