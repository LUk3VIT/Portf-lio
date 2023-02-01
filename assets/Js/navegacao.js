const butao = document.querySelector('.header__button');
const menu = document.querySelector('.nav');
const sobre = document.querySelector('.sobre');
const formacao = document.querySelector('.formacao');
const projetos = document.querySelector('.projetos');
const tecnologia = document.querySelector('.tecnologia');

butao.addEventListener('click', () => {
    menu.classList.toggle('nav--ativo');
});

sobre.addEventListener('click', () => {
    menu.classList.remove('nav--ativo');
});

formacao.addEventListener('click', () => {
    menu.classList.remove('nav--ativo');
});

projetos.addEventListener('click', () => {
    menu.classList.remove('nav--ativo');
});

tecnologia.addEventListener('click', () => {
    menu.classList.remove('nav--ativo');
});