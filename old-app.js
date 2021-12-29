// Global variables provided by the browsers - window and document
// window object - active browser window / tab
// window.document gives access to the html document and its manipulation
// console.dir(window.document);

// document.body.children[1].children[0].href = 'https://www.google.com';
// // The above can also be achieved by:

// let anchorElement = document.getElementById('external-link');

// // or, another method using the query selector:
let anchorElement = document.querySelector("a");

anchorElement.href = "https://google.com";

// ADD NEW HTML ELEMENT USING JAVASCRIPT

// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This link leads to Google";

// 2. Get access to parent element that holds the new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element
firstParagraph.append(newAnchorElement);
// append will add newAnchorElement at the end of paragraph

// REMOVE ELEMENT

// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");

// 2. Remove it!
firstH1Element.remove();
// Alternatively, we can call the parent element as well
// The shorter code does not works in older IE browsers
// firstH1Element.parentElement.removeChild(firstH1Element);

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML
// innerHTML property can be used to access all the content that is between the opening and closing tags
console.log(firstParagraph.innerHTML);

// firstParagraph.textContent = "Hi, this is <strong> important. </strong>";
firstParagraph.innerHTML = "Hi, this is <strong> important. </strong>";