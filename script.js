const DOM = {
  progress: document.getElementById("progress-bar"),
  backTop: document.getElementById("backTop"),
  loader: document.getElementById("loader"),
  modal: document.getElementById("projectModal"),
  modalText: document.getElementById("modalContent"),
  reveals: document.querySelectorAll(".reveal"),
  skills: document.querySelectorAll(".skill-fill")
};

let ticking = false;

/* Loader */

window.addEventListener("load", () => {
  if (DOM.loader) {
    DOM.loader.style.opacity = "0";
    setTimeout(() => DOM.loader.remove(), 300);
  }
});

/* Scroll Engine */

function scrollEngine() {

  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (DOM.progress) {
    DOM.progress.style.width = (scrollY / docHeight) * 100 + "%";
  }

  if (DOM.backTop) {
    DOM.backTop.style.display = scrollY > 200 ? "block" : "none";
  }

  DOM.reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      el.classList.add("active");
    }
  });

  DOM.skills.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      bar.style.width = bar.dataset.width;
    }
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(scrollEngine);
    ticking = true;
  }
});

/* Back Top */

DOM.backTop.addEventListener("click", () => {
  window.scrollTo({top:0,behavior:"smooth"});
});

/* Modal */

document.addEventListener("click", e => {

  if (e.target.classList.contains("project-item")) {
    DOM.modal.style.display = "flex";
    DOM.modalText.innerText = e.target.dataset.project;
  }

  if (e.target.id === "closeModal") {
    DOM.modal.style.display = "none";
  }

});  }

  if (DOM.navbar) {

    if (scrollY > lastScroll && scrollY > 120) {
      DOM.navbar.classList.add("nav-hidden");
    } else {
      DOM.navbar.classList.remove("nav-hidden");
    }

    lastScroll = scrollY;
  }

  ticking = false;
}

/* THROTTLED SCROLL */

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(scrollEngine);
    ticking = true;
  }
});

/* BACK TO TOP */

if (DOM.backTop) {
  DOM.backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* PROJECT MODAL */

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("project-item")) {

    if (DOM.modal && DOM.modalText) {
      DOM.modalText.textContent = e.target.dataset.project;
      DOM.modal.style.display = "flex";
    }
  }

  if (e.target.id === "closeModal") {
    if (DOM.modal) DOM.modal.style.display = "none";
  }

});

/* PRIVATE ANALYTICS */

(() => {

  let visits = Number(localStorage.getItem("siteVisits")) || 0;
  visits++;

  localStorage.setItem("siteVisits", visits);

  if (location.search.includes("admin=1")) {
    if (DOM.adminBox && DOM.visitCount) {
      DOM.adminBox.style.display = "block";
      DOM.visitCount.textContent = visits;
    }
  }

})();
