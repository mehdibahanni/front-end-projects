let search = document.querySelector('input');
let button = document.querySelector('button');
let  p = document.querySelector('p');

button.addEventListener('click', ()=>{
    value = search.value;
    if(value !==''){
        let regExp = new RegExp(value, 'gi');
        p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>")
    }
});