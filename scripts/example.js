// select elements from the DOM
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");
// initialize a counter
let count = 1;
const maxClicks = 5; // maximum number of clicks before reset
// add an event listener to the button
buttonA.onclick = () => {
    if (count <= maxClicks) {
        buttonA.textContent = "Try again!";
        headingA.textContent = `${count} clicks so far`;
        count += 1;
    } else {
        //reset logic
        buttonA.textContent = "Click me!";
        headingA.textContent = "Click the button to start counting!";
        count = 1;
    }


};

let x;
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet();

let name = "world";
let message = `hello, ${name}!`;
console.log(message);

let course = "Web Development Design";
let number = "wdd131";
let creadits = "3";

let courseInfo = `You are enrolled in ${course} ${number} for ${creadits} credits.`;
console.log(courseInfo);

//produce unordered list of three temples based on the template array using template literals
let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
  listItems += `<li>${temples}</li>`;
}
document.querySelector("ul").innerHTML = listItems;

// get current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// get last modified date
const lastModifiedElement = document.getElementById("lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


// The function output defined below is used to aid in displaying the results by appending the output paragraph with an id attribute of 'output'
function output(linenumber, content) {
  const outputElement = document.querySelector('#output');
  outputElement.innerHTML += `<p><strong>${linenumber}</strong>:  ${content}</p>`;
}


