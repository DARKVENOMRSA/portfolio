// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Block inspect shortcuts
document.addEventListener("keydown", e => {

  if (e.key === "F12") e.preventDefault();

  if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();

});

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Dark mode
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// Counters

const personalMsg = document.getElementById("personalMessage");
const personalCount = document.getElementById("personalCount");

if (personalMsg) {
  personalMsg.addEventListener("input", () => {
    personalCount.textContent = personalMsg.value.length;
  });
}

const projectMsg = document.getElementById("projectMessage");
const projectCount = document.getElementById("projectCount");

if (projectMsg) {
  projectMsg.addEventListener("input", () => {
    projectCount.textContent = projectMsg.value.length;
  });
}
