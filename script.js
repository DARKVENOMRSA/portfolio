// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Dark mode
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Character counters

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
