// Your code goes here

// VARIABLES
// navbar
let mainNav = document.getElementsByClassName("main-navigation"); 
let navHeader = document.getElementById("logo-heading");

// top section
let busImg = document.querySelector("header img");
let welcomeText = document.querySelector("header h2")

// middle section (let's go!)
let middleSection = document.getElementsByClassName("content-section");
let middleImgs = document.getElementsByClassName("img-content")

// destination section
let destinationSection = document.getElementsByClassName("content-destination");

// bottom section
let funInSun = document.querySelector(".destination h4") 
let signUpButtons = document.querySelectorAll(".btn")

// Event Listeners
// Click on fun bus image which turns site into horror bus


// Add "!" to h2 on click
let h2Arr = Array.from(document.getElementsByTagName("h2"));

busImg.addEventListener("click", function(event) {
    h2Arr.forEach(element => { element.textContent += "!"})
})
