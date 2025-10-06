// Footer Dates
document.getElementById("year").textContent = `${new Date().getFullYear()}`;
document.getElementById("lastModified").textContent = `${document.lastModified}`;

// Impact Counter
let impactCount = localStorage.getItem("impactCount") || 0;
impactCount++;
localStorage.setItem("impactCount", impactCount);
const impactDisplay = document.getElementById("impactCounter");
if (impactDisplay) {
  impactDisplay.textContent = `Lives impacted: ${impactCount}`;
}

// Responsive Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// Wind Chill Calculation
function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  );
}
const temperature = 45;
const windSpeed = 10;
if (temperature <= 50 && windSpeed > 3) {
  const chill = calculateWindChill(temperature, windSpeed);
  console.log(`Wind Chill: ${chill.toFixed(1)}°F`);
}

// Founder Object
const founder = {
  name: "Emily",
  role: "Founder & Director",
  mission: "Empowering underserved communities through compassion and action."
};
console.log(`${founder.name}, ${founder.role}: ${founder.mission}`);

// Projects Array
const projects = [
  {
    title: "Community Literacy Program",
    category: "education",
    description: "Providing books and tutoring to children in underserved areas.",
    image: "../in-his-hands/images/Books-For-Africa.jpg",
    alt: "Children reading books"
  },
  {
    title: "Mobile Health Clinic",
    category: "healthcare",
    description: "Delivering essential medical services to remote villages.",
    image: "../in-his-hands/images/mobile-clinic.png",
    alt: "Mobile clinic"
  },
  {
    title: "Youth Empowerment Workshops",
    category: "outreach",
    description: "Training young leaders in life skills and civic engagement.",
    image: "../in-his-hands/images/initiative-photo.png",
    alt: "Youth participating in a workshop"
  }
];

// Render Projects
function renderProjects(filteredProjects) {
  const container = document.getElementById("projectCards");
  if (!container) return;

  container.innerHTML = "";
  filteredProjects.forEach(project => {
    const card = document.createElement("article");
    card.innerHTML = `
      <figure>
        <img src="${project.image}" alt="${project.alt}" loading="lazy" />
        <figcaption>${project.title}</figcaption>
      </figure>
      <p>${project.description}</p>
    `;
    container.appendChild(card);
  });
}

// Filter Projects
function filterProjects(category) {
  if (category === "all") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(p => p.category === category);
    renderProjects(filtered);
  }
}

// Initial Load
if (document.getElementById("projectCards")) {
  renderProjects(projects);
}

// Contact Form Feedback
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
  });
}