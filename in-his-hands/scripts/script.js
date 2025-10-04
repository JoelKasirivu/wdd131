document.addEventListener("DOMContentLoaded", () => {
  // Existing menu toggle and other logic...

  // Set current year
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = currentYear;

  // Set full current date
  const dateSpan = document.getElementById("date");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-UG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  if (dateSpan) dateSpan.textContent = formattedDate;
});
document.addEventListener("DOMContentLoaded", () => {
  // DOM Manipulation
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-items");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Object
  const contactInfo = {
    email: "info@inhishands.org",
    phone: "+256 700 123456"
  };

  // Array + Method
  const pages = ["index", "about", "projects", "contact", "references"];
  const pageList = pages.map(p => `Page: ${p}.html`);

  // Template Literal
  console.log(`Welcome to ${contactInfo.email}. Pages: ${pageList.join(", ")}`);

  // Conditional Branching
  if (pages.length > 4) {
    console.log("This site has a rich structure.");
  }

  // localStorage
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
});