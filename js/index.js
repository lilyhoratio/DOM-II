// Your code goes here

// VARIABLES
// navbar
let mainNav = document.getElementsByClassName("main-navigation");
let navHeader = document.getElementsByClassName("logo-heading");
let navLinks = document.querySelectorAll("nav a");

// top section
let busImg = document.querySelector("header img");
let welcomeText = document.querySelector("header h2")

// middle section (let's go!)
let middleSection = document.getElementsByClassName("content-section");
let middleImgs = document.querySelectorAll(".img-content img")

// destination section
let destinationSection = document.getElementsByClassName("content-destination");

// bottom section
let funInSun = document.querySelector(".destination h4")
let signUpButtons = document.querySelectorAll(".btn")




// EVENT LISTENERS

// Mouseover - change background with mouseover "FunBus"

// let body = document.getElementsByClassName("body");
let body = document.querySelector("body");
navHeader[0].addEventListener('mouseover', function(event) {
    body.style.backgroundColor = "lightgrey";
})

// Click - Add "!" to h2
let h2Arr = Array.from(document.getElementsByTagName("h2"));

busImg.addEventListener("click", function (event) {
    h2Arr.forEach(element => {
        element.textContent += "!"
    })
})

// Drag - Nav Links change color and size
navLinks.forEach(anchor => {
    anchor.addEventListener("drag", event => {
        anchor.style.color = "pink";
        anchor.style.fontSize = '2rem';
        // event.target.classList.toggle('turnPink');
    })
})

// Wheel - paragraphs turn uppercase
let paras = document.querySelectorAll("p");
paras.forEach(para => {
    para.addEventListener("wheel", event => {
        para.textContent = para.textContent.toUpperCase();
        // let para1 = "";
        // for (let i=0; i <para.textContent.length ;i++){
        //     let paraText = para.textContent;
        //     para1 += paraText[i].toUpperCase();
        //     console.log(para1);
        // }
        // return para1;
    })
})

// Resize - window alerts
window.addEventListener("resize", function (event) {
    this.alert("resizin");
});

// Double click - flip/hide image
middleImgs.forEach(img => {
    img.addEventListener("click", event => event.target.style.display = "none")
})

// Keydown


