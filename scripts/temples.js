document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "❌" : "☰";
  });

  // Footer dynamic year and last modified
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = document.lastModified;
});
