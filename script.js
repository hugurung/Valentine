// ===== Elements =====
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.getElementById("wrapper");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answerArea = document.getElementById("answerArea");

const noWrap = document.getElementById("noWrap") || document.querySelector(".no-wrap");
const noText = document.getElementById("noText");

const heartsLayer = document.getElementById("heartsLayer");
const confettiLayer = document.getElementById("confettiLayer");

// ✅ Customize these later
const noMessages = [
  "Invalid input 🥺 > Runchu hola ma 😭😭😭",
];

let msgIndex = 0;
let hideNoTextTimer = null;

// ===== Helpers =====
function showScreen(target) {
  [screen1, screen2, screen3].forEach((s) => s.classList.remove("active"));
  target.classList.add("active");
}

function resetNoButton() {
  // return to default corner (CSS uses right/bottom)
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.right = "0";
  noBtn.style.bottom = "0";
}

function moveNoButtonRandom() {
  const pad = 10;

  // Prevent negative max when container is small
  const maxX = Math.max(0, answerArea.clientWidth - noBtn.offsetWidth - pad);
  const maxY = Math.max(0, answerArea.clientHeight - noBtn.offsetHeight - pad);

  const x = pad + Math.floor(Math.random() * (maxX + 1));
  const y = pad + Math.floor(Math.random() * (maxY + 1));

  // IMPORTANT: unset right/bottom so left/top works
  noBtn.style.right = "auto";
  noBtn.style.bottom = "auto";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// ===== Envelope buttons =====
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

// ===== YES -> confetti + screen3 =====
yesBtn.addEventListener("click", () => {
  confettiBurst(160);
  showScreen(screen3);
});

// ===== NO -> rotate message + show bubble + dodge =====
noBtn.addEventListener("mouseenter", () => {
  // rotate message
  noText.textContent = noMessages[msgIndex];
  msgIndex = (msgIndex + 1) % noMessages.length;

  // show message bubble (stays visible even after dodge)
  if (noWrap) noWrap.classList.add("show-text");

  // dodge
  moveNoButtonRandom();

  // keep it visible for 1.8s
  clearTimeout(hideNoTextTimer);
  hideNoTextTimer = setTimeout(() => {
    if (noWrap) noWrap.classList.remove("show-text");
  }, 1800);
});

// hide bubble if mouse leaves the whole answer area
answerArea.addEventListener("mouseleave", () => {
  clearTimeout(hideNoTextTimer);
  if (noWrap) noWrap.classList.remove("show-text");
});

// ===== Floating hearts =====
const hearts = ["💗", "💖", "💕", "💘", "❤️"];

function spawnHeart() {
  if (!heartsLayer) return;

  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 18 + "px";
  h.style.animationDuration = 4 + Math.random() * 3 + "s";
  h.style.setProperty("--drift", Math.round(Math.random() * 120 - 60) + "px");

  heartsLayer.appendChild(h);
  setTimeout(() => h.remove(), 7500);
}

setInterval(spawnHeart, 300);

// ===== Confetti =====
function confettiBurst(amount = 150) {
  if (!confettiLayer) return;

  const colors = ["#ff4d6d", "#ffafcc", "#cdb4db", "#bde0fe", "#caffbf"];

  for (let i = 0; i < amount; i++) {
    const c = document.createElement("div");
    c.className = "confetti";

    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = 2.5 + Math.random() * 2.5 + "s";

    confettiLayer.appendChild(c);
    setTimeout(() => c.remove(), 5200);
  }
}









