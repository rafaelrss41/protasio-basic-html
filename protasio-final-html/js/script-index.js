const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const HomeImg = document.querySelector('.home-img');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    HomeImg.classList.toggle('ativo');
})