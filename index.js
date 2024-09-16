const navigationBar = document.querySelector("nav");

navigationBar.addEventListener("mouseover", hover);
navigationBar.addEventListener("mouseout", hoverOut);

function hover() {
  navigationBar.classList.add("black");
  setTimeout( function () { 
    navigationBar.classList.add("cursor")}, 500);
}


function hoverOut() {
  navigationBar.classList.remove("black");
  navigationBar.classList.remove("cursor");
  
}

const menuContainer = document.getElementsByClassName("menu");
const menuBar = document.getElementsByClassName("menu");

menuContainer.addEventListener("click", openMenu);

function openMenu() {
  document.getElementsByClassName('menu').style.right = '0%';
  document.getElementById('menu').style.opacity = '1';
}

function closeMenu() {
  document.getElementsByClassName('menu').style.right = '100%';
  document.getElementById('menu').style.opacity = '0';
}
