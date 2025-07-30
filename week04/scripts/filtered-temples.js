// NEW: Temple data array with 10 entries 
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
//  Additional temples
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17000,
        imageUrl: "https://th.bing.com/th/id/OIP.eNzgwGyfnf8RIlGpfCoXBgHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
{
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://th.bing.com/th/id/OIP.aC5JX0MRC7fLBNChKU6uNgHaHW?w=199&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    templeName: "South Africa Johannesburg",
    location: "Johannesburg, SouthAfrica",
    dedicated: "2025, March, 15",
    area: 12000,
    imageUrl: "https://th.bing.com/th/id/OIP.u73T24-7UVhB0cc75cbipQHaHW?w=185&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

// Function to render temple cards
function outputTemples(temples) {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";

  temples.forEach(t => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" />
    `;
    container.appendChild(card);
  });
}
// Filter logic based on criteria
function filterTemples(criteria) {
  let filtered = temples;
  if (criteria === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  } else if (criteria === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  } else if (criteria === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (criteria === "small") {
    filtered = temples.filter(t => t.area < 10000);
  }
  outputTemples(filtered);
}

// Initial load
outputTemples(temples);
// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

