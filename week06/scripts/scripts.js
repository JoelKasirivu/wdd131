//  JavaScript Functions, DOM Manipulation, Conditional Branching, Objects, Arrays, Template Literals, localStorage

// Function to display a random inspirational quote
const quotes = [
  "Compassion is the language the deaf can hear and the blind can see.",
  "Small acts, when multiplied by millions, can transform the world.",
  "Service to others is the rent you pay for your room here on Earth."
];

function displayQuote() {
  const quoteOutput = document.getElementById("quote-output");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  displayQuote();

  const refreshBtn = document.getElementById("refresh-btn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", displayQuote);
  }
});


// DOM interaction: run quote function on page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quote-output")) {
    displayQuote();
  }

  // Form submission handling
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Conditional branching
      if (name && email && message) {
        const contactData = {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        };

        // Store in localStorage
        localStorage.setItem("contactSubmission", JSON.stringify(contactData));

        // Template literal for confirmation
        alert(`Thank you, ${name}, for reaching out! We'll be in touch soon.`);
        form.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});
