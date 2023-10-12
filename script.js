let menuBurger = document.querySelector('.header__menu-burger');
let menuLeft = document.querySelector('.header__menu__items');
let menuRight = document.querySelector('.header__right-side');
let firstScreen = document.querySelector('.first-screen');
let firstScreenTagLine = document.querySelector('.first-screen__tagline');
let firstScreenCatalogueLinkWrap = document.querySelector('.first-screen__catalogue-link-wrap');

menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
    menuLeft.classList.toggle('active');
    menuRight.classList.toggle('active');
    firstScreen.classList.toggle('active');
    firstScreenTagLine.classList.toggle('active');
    firstScreenCatalogueLinkWrap.classList.toggle('active');
})