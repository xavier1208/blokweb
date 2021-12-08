// JavaScript Document
var hamMenu =
document.querySelector("header nav ul li ul")

var hamButton =
document.querySelector(".icon");



hamButton.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu(){
    hamMenu.classList.toggle("visible");
}





var colorModeInput = document.querySelector("input");

colorModeInput.addEventListener('change', erisopmijgeklikt);

function erisopmijgeklikt() {
  if( colorModeInput.checked ) {
    document.documentElement.classList.add("lightMode");
  } else {
    document.documentElement.classList.remove("lightMode");
  }
}