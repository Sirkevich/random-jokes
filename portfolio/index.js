const hamburger = document.querySelector('.hamburger');
const navListBurgerOpen = document.querySelector('.nav-list');
const links = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navListBurgerOpen.classList.toggle('nav-burger-open');
}

function closeMenu() {
    hamburger.classList.remove('open');
    navListBurgerOpen.classList.remove('nav-burger-open');
  }

hamburger.addEventListener('click', toggleMenu);
links.addEventListener('click',closeMenu);