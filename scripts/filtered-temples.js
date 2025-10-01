const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846-04-30",
    area: 54000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17000,
    imageUrl: "./images/img-temple.jpeg"
  },
  
  {
    name: "Kampala Uganda Temple",
    location: "Kampala, Uganda",
    dedicated: "2025-06-01",
    area: 15000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
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
    name: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 56000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 70000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Columbus Ohio Temple",
    location: "Columbus, Ohio",
    dedicated: "2022-09-18",
    area: 9000,
    imageUrl: "./images/img-temple.jpeg"
  },
  {
    name: "Cedar City Utah Temple",
    location: "Cedar City, Utah", 
    dedicated: "2017-03-26",
    area: 9700,
    imageUrl: "./images/img-temple.jpeg"
  }
];

const container = document.getElementById("temple-cards");

function renderTemples(list) {
  container.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" />
      <div class="card-content">
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterTemples(criteria) {
  let filtered;
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
  renderTemples(filtered);
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    filterTemples(btn.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

renderTemples(temples);