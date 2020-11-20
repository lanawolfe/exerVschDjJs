var square = document.getElementById("square");
var originalColor = window.getComputedStyle(square).backgroundColor;
console.log(originalColor);
function hoverColor(color) {
  square.style.backgroundColor = color;
}
function mouseOut(color) {
  square.style.backgroundColor = color;
}
function leftClickColor(color) {
  square.style.backgroundColor = color;
}
function upClickColor(color) {
  square.style.backgroundColor = color;
}
function dblClickColor(color) {
  square.style.backgroundColor = color;
}
function scrollColor(color) {
  square.style.backgroundColor = color;
}
function Color() {
  square.style.backgroundColor = color;
}