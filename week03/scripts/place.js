// ==========================
// FOOTER: Current Year & Last Modified
// ==========================
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ==========================
// WEATHER: Wind Chill Logic
// ==========================
const temp = 45; // °F
const windSpeed = 5; // mph

// One-line function to calculate wind chill (Imperial units)
const calculateWindChill = (t, s) =>
  35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;

// Only calculate wind chill if conditions are valid
let windChill = "N/A";
if (temp <= 50 && windSpeed > 3) {
  windChill = `${calculateWindChill(temp, windSpeed).toFixed(1)} °F`;
}

document.querySelector("#windChill").textContent = windChill;
