const button = document.getElementById('button');
const hexCode = document.getElementById('hexCode');


console.log(button)
console.log(hexCode)

function change(){
    let letters = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

button.addEventListener('click' , ()=>{
    document.body.style.background = change();
    hexCode.innerHTML = change();
})
for(let i = 0 ; i < 10 ; i ++){
setTimeout(()=>{
    
        button.click()
    },1000)
}
