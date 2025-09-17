// Get current year
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get last modified date
const lastModifiedPara = document.getElementById("lastModified");
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
