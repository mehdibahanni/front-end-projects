let input = document.querySelector('input');
let lock = document.querySelector('.lock i');

lock.addEventListener('click', ()=>{
    if(input.type === 'password'){
        input.type = 'text'
    }else{
        input.type = 'password'
    }
})