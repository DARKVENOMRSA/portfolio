/* TERMINAL TYPE EFFECT */
const lines = [
  "$ whoami",
  "Dark Phenom RSA",
  "",
  "$ location",
  "South Africa",
  "",
  "$ interests",
  "coding • hacking • tunneling • learning",
  "",
  "$ status",
  "building..."
];

let i = 0;
let char = 0;
const terminal = document.getElementById("terminal-output");

function type() {
  if (i < lines.length) {
    if (char < lines[i].length) {
      terminal.textContent += lines[i][char++];
      setTimeout(type, 25);
    } else {
      terminal.textContent += "\n";
      char = 0;
      i++;
      setTimeout(type, 300);
    }
  }
}
type();

/* REVEAL ORDER */
document.querySelectorAll(".reveal")
  .forEach((el, i) => {
    setTimeout(() => el.classList.add("active"), i * 500);
  });

/* MATRIX CURSOR */
const cursor = document.querySelector(".cursor");
let x = 0, y = 0;

window.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
});

function render() {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  requestAnimationFrame(render);
}
render();
