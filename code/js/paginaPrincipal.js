
/*Cuando click  .button, .nav Toggle 'activ0' */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})