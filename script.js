let menu = document.querySelector(".menu-img");
let navBar = document.querySelector(".navbar");
let exitMenu = document.querySelector(".closebtn");

menu.onclick= function() {
    navBar.style.width = "250px";
};

exitMenu.onclick = function () {
    navBar.style.width = "0";
}