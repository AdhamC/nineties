function clickHandler(){ // declare a function that updates the state
  browser.tabs.executeScript({file: "/content_scripts/nineties.js"});
}
var element = document.querySelector('.button');
element.addEventListener('click', clickHandler);
