const menu = document.querySelector('.toggle__menu');
const nav = document.querySelector('.headernav');
const malabo = document.querySelector(".blurry");

menu.addEventListener('click',() => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
    nav.style=("z-index:999");
    nav.style=("transition:.5s ease");
    malabo.classList.toggle("show");
});