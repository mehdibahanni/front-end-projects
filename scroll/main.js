let indicator = document.querySelector('.scroll-indicator .progress');

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
console.log(scrollHeight);

window.addEventListener('scroll',scroll)

function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let progress = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${progress}%`
}