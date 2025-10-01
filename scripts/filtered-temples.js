const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "./images/img-temple.jpeg "
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Kinshasa DR Congo Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "2019-04-14",
    area: 10000,
    imageUrl: "./images/img-temple.jpeg"
  },
{
    name: "New Temple",
    location: "New Location",
    dedicated: "2023-01-01",
    area: 30000,
    imageUrl: "./images/img-temple.jpeg"
  },
{    name: "Small Temple",
    location: "Small Location",
    dedicated: "1950-05-15",
    area: 8000,
    imageUrl: "./images/img-temple.jpeg"
  },
{    name: "Ancient Temple",
    location: "Ancient Location",
    dedicated: "1850-07-20",
    area: 12000,
    imageUrl: "./images/img-temple.jpeg"
  }
];

function displayTemples(templesArray) {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    filterTemples(filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial display
displayTemples(temples);
filterTemples("all");
