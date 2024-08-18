let nav = document.querySelector('.nav-content');
let button = document.querySelector('.btn');

button.addEventListener('click', ()=>{
    button.querySelector('span').classList.toggle('change');
    nav.classList.toggle('change');

})