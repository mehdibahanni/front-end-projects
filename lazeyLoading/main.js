let loadText = document.querySelector('.load-text');
let background = document.querySelector('.background');

let load = 0;
let int = setInterval(blurring , 30)
function blurring(){
    load++
    if(load > 99){
        clearInterval()
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0 , 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0 , 100, 1, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max )=>{
    return ((num - in_min) * (out_max - out_min )) / (in_max - in_min) + out_min;
}
