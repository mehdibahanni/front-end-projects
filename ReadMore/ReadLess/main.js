let content = document.querySelector('.content-contianer-2');
let button  = document.querySelector('.contianer .toggle-btn');

button.addEventListener('click', ()=>{
    content.classList.toggle('toggle');
});
console.log(content)
console.log(button)