let copy = document.querySelector('.btn-copy');
let move = document.querySelector('btn-move');
let inputText = document.querySelector('textarea[name=input-text');
let outputText = document.querySelector('textarea[name=ouput-text');
let output = document.querySelector('.output-erea');

copy.addEventListener('click', ()=>{this.select
    let text = inputText.value;
    copyToCliBoard(text)
})
move.addEventListener('click', ()=>{this.select
    let text = inputText.value;
    outputText.value = text
})

function copyToCliBoard(copyText){
    let outputText = document.querySelector('.output-erea');
    let texarea = document.createElement('textarea');
    texarea.value = copyText

    outputText.appendChild(texarea);
    texarea.select();
    document.execCommand('copy');
    
    output.innerHTML = `<h3> Content Copy</h3>`
    output.classList = 'add'
    setTimeout(()=>{
        output.classList.toggle('add');
        output.textContent = '';
    },2000)


}