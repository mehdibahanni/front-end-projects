let menu = document.querySelector('.menu');
let links = document.querySelectorAll('li');
let btn = document.querySelector('.btn');
let hightlight = document.querySelector('.highlight');

btn.addEventListener("click", function(){
    if(this.dataset.open === "close"){
        menu.style.clipPath = "circle(100% at 50% 50%)";
        this.dataset.open = "open";
    }else{
        this.dataset.open = "close";
        menu.style.clipPath = '';
        hightlight.style =  '';
    }
})
links.forEach((link) =>{
    link.addEventListener('mouseover', function() {
        const w = this.offsetWidth,
              h = this.offsetHeight,
              t = this.offsetTop;
        hightlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px ;`;

    })
})