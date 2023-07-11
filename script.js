let menu = document.querySelector(".menu-img");
let navBar = document.querySelector(".navbar");
let exitMenu = document.querySelector(".closebtn");
let projectButton = document.querySelector(".project-but");
let homeButton = document.querySelector(".home-but");
let aboutMeButton = document.querySelector(".aboutme-but");
let contactButton = document.querySelector(".contact-but");
let homePage = document.querySelector(".home");
let aboutMePage = document.querySelector(".aboutme");
let projectPage = document.querySelector(".projects");
let contactPage = document.querySelector(".contacts");
let likeButtons = document.querySelectorAll("#like-but");


menu.onclick= function() {
    navBar.style.width = "250px";
};

exitMenu.onclick = function () {
    navBar.style.width = "0";
}

for (let button of likeButtons) {
    button.onclick = function() {
      button.classList.toggle("glyphicon-heart-empty");
      button.classList.toggle("glyphicon-heart");
    };
  };

homeButton.onclick = function () {
    homePage.style.display = "block";
    aboutMePage.style.display = "none";
    projectPage.style.display = "none";
    contactPage.style.display = "none";
   
}
aboutMeButton.onclick = function () {
    homePage.style.display = "none";
    aboutMePage.style.display = "block";
    projectPage.style.display = "none";
    contactPage.style.display = "none";
    
}
projectButton.onclick = function () {
    homePage.style.display = "none";
    aboutMePage.style.display = "none";
    projectPage.style.display = "block";
    contactPage.style.display = "none";
   
}
contactButton.onclick = function () {
    homePage.style.display = "none";
    aboutMePage.style.display = "none";
    projectPage.style.display = "none";
    contactPage.style.display = "block";
}