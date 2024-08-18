let monthEl   = document.getElementById('month');
let dayEl     = document.getElementById('day');
let dayNumEl  = document.getElementById('day-num');
let yearNumEl= document.getElementById('year-num');


window.addEventListener('DOMContentLoaded', ()=>{
    let date = new Date();
    let month = date.getMonth();
    monthEl.innerHTML = date.toLocaleDateString("en",{
        month: "long",
    });
    
    dayNumEl.innerHTML = date.getDate();
    yearNumEl.innerHTML = date.getFullYear();

    dayEl.innerHTML = date.toLocaleDateString('en',{
        weekday: 'long'
    })
});
