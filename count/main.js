let count = document.getElementById('count');
let increment = document.getElementById('increment');
let save = document.getElementById('save');
let entreis = document.querySelector('.entries-field');

let counter = 0;
// increment.onclick = function(){
//     counter += 1;
//     count.textContent = counter;
// }
// save.onclick = function(){
//     count.textContent  = 0;
//     entreis.innerHTML += `${counter}, `;
//     counter = 0;
// }
increment.addEventListener('click', ()=>{
    counter += 1;
    count.textContent = counter;
})
save.addEventListener('click', ()=>{
    let countStr = counter + "  ,";
    entreis.textContent += countStr;
    count.textContent = 0;
    counter = 0;
})