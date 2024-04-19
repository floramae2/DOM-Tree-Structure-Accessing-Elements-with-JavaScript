//6
// Selecting the parent element
const parentElement = document.getElementById('parent');

// Navigating to the first child
const firstChild = parentElement.firstElementChild;

// Navigating to the next sibling of the first child
const nextSibling = firstChild.nextElementSibling;

// Navigating to the last child of the parent element
const lastChild = parentElement.lastElementChild;

// Logging the text contents of each child in the console
console.log("Text content of the first child:", firstChild.textContent);
console.log("Text content of the next sibling of the first child:", nextSibling.textContent);
console.log("Text content of the last child:", lastChild.textContent); 




