// JavaScript Document

// HAMBURGER MENU

var hamMenu =
  document.querySelector("header nav ul li ul")

var hamButton =
  document.querySelector(".icon");

hamButton.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  hamMenu.classList.toggle("visible");
}



// FONTSIZEKNOP 1 groot WERKEND
var fontsizeknop = document.querySelector(".fontsize");
fontsizeknop.addEventListener("click", fontgrootte);

function fontgrootte() {
  console.log(fontsizeknop);
  document.body.style.setProperty("font-size", "1.5em");
    snd.play()
}
// GELUID groeien
var buttonElementgroeien = document.querySelector('#groeien');
var audio1 = document.getElementById("audioMusic1");

function groeigeluid() {
    audio1.play(); 
}; 
buttonElementgroeien.addEventListener('click', groeigeluid);


// FONTSIZEKNOP 2
var fontsizeknop2 = document.querySelector(".fontsize2");
fontsizeknop2.addEventListener("click", fontgrootte2);

function fontgrootte2() {
  document.body.style.setProperty("font-size", "1em");
      snd.play()
}
// GELUID KRIMPEN
var buttonElementkrimpen = document.querySelector('#krimpen');
var audio2 = document.getElementById("audioMusic2");

function krimpgeluid() {
    audio2.play(); 
}; 
buttonElementkrimpen.addEventListener('click', krimpgeluid);



