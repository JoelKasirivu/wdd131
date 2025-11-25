document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});


// Select the first <article> element
const article = document.querySelector('article');

// Select the heading by its ID
const heading = document.querySelector('#headline');

// Select the paragraph inside the article
const paragraph = document.querySelector('article p');

// Select the link inside the article
const link = document.querySelector('article a');

// Log their content
console.log(heading.textContent);   // "Welcome to Sacred Strokes"
console.log(paragraph.textContent); // "This is a spiritually themed digital sanctuary."
console.log(link.href);             // Full URL to "about.html"

article.innerHTML = `innerHTML supports <strong>HTML</strong> tags. The textContent does not.`;
console.log(article.innerHTML);

article.style.textAlign = 'left';
article.style.backgroundColor = '#f0f8ff'; // AliceBlue background
article.setAttribute('class', 'highlighted-article');