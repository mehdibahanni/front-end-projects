let typingText = document.querySelector('.typing-text');
let cursor = document.querySelector('.cursor');

let words = [" JavaScript", " CSS", " HTML", " Reacte", " php" , " NodeJs"];

document.addEventListener( 'DOMContentLoaded' , ()=>{
    if(words.length){
        setTimeout(typing , newLetterDelay)
    }
});


let typingDelay = 200;
let earseDelay = 200;
let newLetterDelay = 2000;

index = 0;
chartInex = 0;

function typing(){
    if(chartInex < words[index].length){
        typingText.textContent += words[index].charAt(chartInex);
        chartInex++
        setTimeout(typing, typingDelay);
    }else{
        setTimeout(earse, newLetterDelay);
    }
}

function earse(){
    if(chartInex > 0){
        typingText.textContent = words[index].substring(0, chartInex - 1);
        chartInex--;
        setTimeout(earse , earseDelay);
    }else{
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(typing , newLetterDelay);
    }
}