// VARIABLES
// navbar
const mainNav = document.getElementsByClassName("main-navigation");
const navHeader = document.getElementsByClassName("logo-heading");
const navLinks = document.querySelectorAll("nav a");

// top section
const busImg = document.querySelector("header img");
const welcomeText = document.querySelector("header h2")

// middle section (let's go!)
const middleSection = document.getElementsByClassName("content-section");
const middleImgs = document.querySelectorAll(".img-content img")

// destination section
const destinationSection = document.getElementsByClassName("content-destination");

// bottom section
const signUpButtons = document.querySelectorAll(".btn")
const footer = document.querySelector("footer")

// EVENT LISTENERS

// 1 - Mouseover: change background with mouseover "FunBus"
// let body = document.getElementsByClassName("body");
const body = document.querySelector("body");
navHeader[0].addEventListener('mouseover', function(event) {
    body.style.backgroundColor = "lightgrey";
})

// 2 - Click: add "!" to all h2s
const h2Arr = Array.from(document.getElementsByTagName("h2"));

busImg.addEventListener("click", function (event) {
    h2Arr.forEach(element => {
        element.textContent += " !"
    })
})

// 3 - Drag: nav links change color and size
navLinks.forEach(anchor => {
    anchor.addEventListener("drag", event => {
        anchor.style.color = "pink";
        anchor.style.fontSize = '2rem';
    })
})

// 4 - Wheel: paragraphs turn uppercase
const paras = document.querySelectorAll("p");
paras.forEach(para => {
    para.addEventListener("wheel", event => {
        para.textContent = para.textContent.toUpperCase();

        // Tried to get each character to turn uppercase in animation-like way
        // let para1 = "";
        // for (let i=0; i <para.textContent.length ;i++){
        //     let paraText = para.textContent;
        //     para1 += paraText[i].toUpperCase();
        // }
        // return para1;
    })
})

// 5 - Resize: window alerts
window.addEventListener("resize", function (event) {
    this.alert("resizin");
});

// 6 - Double click: flip/hide image
middleImgs.forEach(img => {
    img.addEventListener("dblclick", event => event.target.style.display = "none")
})

// 7 - Keydown
window.addEventListener("keydown", event => {
    if (event.key.match(/^[A-Za-z]+$/)) {
        console.log("YOU TYPED A CHARACTER!")
    }
})

// 8 - Keyup
window.addEventListener("keyup", event => {
    signUpButtons.forEach(button => button.style.backgroundColor = "yellow")
})

// 9 - Click: add padding to navbar
mainNav[0].addEventListener("click", event => {
    event.currentTarget.style.paddingLeft = "100px"
})

// 10 - Mouseover: footer to change text
footer.addEventListener("mouseover", event => {
    event.currentTarget.style.fontFamily = "Papyrus"
})

// figure out how to add new class styling and toggle it