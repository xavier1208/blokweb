// JavaScript Document

/////////////////
// HAMBURGER MENU
/////////////////
var hamMenu =
  document.querySelector("header nav ul li ul"); // hiermee selecteer je de tweede ul van de nav

var hamButton =
  document.querySelector(".icon");

hamButton.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  hamMenu.classList.toggle("visible");
}


///////////////////////
// FONTSIZEKNOP 1 Groot 
///////////////////////
var fontsizeknop = document.querySelector(".fontsize"); //hiermee selecteer je de juiste knop
fontsizeknop.addEventListener("click", fontgrootte);

function fontgrootte() {
  console.log(fontsizeknop);
  document.body.style.setProperty("font-size", "1.5em");
}

// GELUID groeien
var buttonElementgroeien = document.querySelector('#groeien'); //hiermee selecteer je weer de knop
var audio1 = document.getElementById("audioMusic1"); //hiermee selecteer je het juiste geluid

buttonElementgroeien.addEventListener('click', groeigeluid);

function groeigeluid() {
  audio1.play(); // https://youtu.be/X7uTyl8Jsso
}


///////////////////////
// FONTSIZEKNOP 2 Klein
///////////////////////
var fontsizeknop2 = document.querySelector(".fontsize2");
fontsizeknop2.addEventListener("click", fontgrootte2);

function fontgrootte2() {
  document.body.style.setProperty("font-size", "1em");
}

// GELUID KRIMPEN
var buttonElementkrimpen = document.querySelector('#krimpen');
var audio2 = document.getElementById("audioMusic2");

buttonElementkrimpen.addEventListener('click', krimpgeluid);

function krimpgeluid() {
  audio2.play(); // https://youtu.be/8u8s2GibXYo
}