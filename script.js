
// ========== HIGHLIGHT MENU NAVIGATION ==========
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 150;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.className = "scroll-top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========== SIMPLE HERO TEXT FADE-IN ==========
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.classList.add("visible");
});
// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ========== FADE-IN ANIMATION ON SCROLL ==========
const fadeElems = document.querySelectorAll(
  ".about-text, .about-image, .visi, .misi, .team-card"
);

function fadeInOnScroll() {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// ========== BACK TO TOP BUTTON ==========
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.className = "scroll-top";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Contact */
function showSuccessMessage() {
  const msg = document.getElementById("success-msg");
  msg.style.display = "block";
  msg.style.opacity = "0";
  setTimeout(() => {
    msg.style.transition = "opacity 0.5s ease";
    msg.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => (msg.style.display = "none"), 500);
  }, 4000);
}
