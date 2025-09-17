// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  hamburgerBtn.textContent = mainNav.classList.contains("open") ? "✖" : "☰";
});
