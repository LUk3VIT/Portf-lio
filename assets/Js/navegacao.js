const butao = document.querySelector('.header__button');
const menu = document.querySelector('.nav')

butao.addEventListener('click', () => {
    menu.classList.toggle('nav--ativo');
});