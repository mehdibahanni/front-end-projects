    // Handle Nav Bar Button
// let navBtn = document.querySelector('.toggle-btn');
// navBtn.onclick = function(){
//     navBtn.classList.toggle('active');
    
// };

let toggleBtn   = document.querySelector(".toggle-btn"),
    links       = document.querySelector('.link-nav'),
    link        = document.querySelectorAll('.link'),
    contianer   = document.querySelector('.page-contianer'),
    overlay     = document.querySelector('.overlay'),
    pages       = document.querySelectorAll('.page');

console.log(overlay);


toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active');
    contianer.classList.toggle('active');
    links.classList.toggle('show')
});

link.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        changePage(i);
    });
});

let pageIndex = 0;
function changePage(index){
    overlay.style.animation = 'slide 1s linear 1';
    setTimeout(()=>{
            pages[pageIndex].classList.remove('active');
            pages[index].classList.add('active');
            pageIndex = index;
    },500);
    setTimeout(()=>{
        overlay.style.animation = null;
    },500);
};