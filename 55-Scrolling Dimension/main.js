let slideContainer = document.querySelector('.slide-container'),
    leftSlid = document.querySelector('.left-side'),
    rightSide = document.querySelector('.right-side'),
    upButton = document.getElementById('up-btn'),
    downbutton = document.getElementById('down-btn'),
    slideLenght = leftSlid.querySelectorAll('div').length

activeSlideIndex = 0;
leftSlid.style.top = `-${(slideLenght - 2) * 100}vh`;

upButton.addEventListener('click', ()=>{ nexSlide('up')})
downbutton.addEventListener('click', ()=>{ nexSlide('down')})

function nexSlide(params){
    const slideHight = slideContainer.clientHeight;
    if(params === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLenght - 1){
            activeSlideIndex = 0;

        }
    }
    if(params === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLenght - 1;
        }
    }
    rightSide.style.transform = `translateY(-${activeSlideIndex * slideHight})px`; 
    leftSlid.style.transform = `translateY(-${activeSlideIndex * slideHight})px`; 
}
