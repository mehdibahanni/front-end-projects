// get inpu value 
let input = document.querySelector('input[type="text"]');
let button = document.querySelectorAll('.formate-btn');
let resultArea = document.querySelector('.result');

input.addEventListener('keyup', ()=> resultArea.innerHTML = input.value);
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('uppercase')){
            resultArea.innerHTML = resultArea.innerHTML.toUpperCase();
        }else if(btn.classList.contains('lowercase')){
            resultArea.innerHTML = resultArea.innerHTML.toLowerCase();
        }else if(btn.classList.contains('capitalize')){
            resultArea.innerHTML = resultArea.innerHTML.charAt(0).toUpperCase() + resultArea.innerHTML.slice(1).toLocaleLowerCase();
        }else if(btn.classList.contains('bold')){
            resultArea.style.fontWeight = '800';
        }else if(btn.classList.contains('italic')){
            resultArea.style.fontStyle = 'italic';
        }else if(btn.classList.contains('underline')){
            resultArea.style.textDecoration = 'underline'
        }
    })
})
