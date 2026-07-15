const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = form.querySelector("input[type='text']");
  const name = nameInput?.value.trim() || "there";

  alert(`Thanks ${name}! Your message has been received.`);
  form.reset();
});