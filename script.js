// Scroll reveal FIXED

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  revealOnScroll();
});

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
