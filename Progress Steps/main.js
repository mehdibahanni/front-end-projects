let progress = document.querySelector('.progress');
let circles = document.querySelectorAll('.circle');

let  btnPrev = document.getElementById('prev');
let  btnNext = document.getElementById('next');

let activeInedx = 1;

btnNext.addEventListener('click', ()=>{
    activeInedx++;
    if(activeInedx > circles.length){
        activeInedx = circles.length;
    }
updateUI()
});
btnPrev.addEventListener('click', ()=>{
    activeInedx--;
    if(activeInedx < 1){
        activeInedx = 1;
    }
updateUI()
});

function updateUI(){
    circles.forEach((circle , index)=>{
        if(index < activeInedx){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });

const actvies = document.querySelectorAll(".active");
progress.style.width = (actvies.length -1) / (circles.length - 1) * 100 +"%";

if(activeInedx ===1){
    btnPrev.classList.add('disabled');
}else if (activeInedx === circles.lenght) {
    btnNext.classList.add('disabled');
}else{
    btnPrev.classList.remove('disabled');
    btnNext.classList.remove('disabled');
    }
}