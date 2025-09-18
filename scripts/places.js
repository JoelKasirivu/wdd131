// Footer Date Setup
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// static weather values
const temp = 10; // celsius
const speed = 5; // km/h

function calculateWindChill(t, s) {
    return (
        13.12 + 
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
} 

const WindChillDisplay = document.getElementById("windChill");
if (temp <= 10 && speed > 4.8) {
    WindChillDisplay.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
    WindChillDisplay.textContent = "N/A";
}
    

// Hamburger Menu Setup 
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');  
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

