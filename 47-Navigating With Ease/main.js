let nav       = document.querySelector('.nav');
let contianer = document.querySelector('.content-contianer');
let products  = document.querySelector('.products');

products.addEventListener('click', ()=>{
    window.scrollBy(100, contianer.offsetHeight); 
    contianer.scrollIntoView({
        behavior: 'smooth'
    });
})


// about.addEventListener('click', ()=>{
//     window.scrollBy(100, contianer.offsetHeight); 
//     contianer.scrollIntoView({
//         behavior: 'smooth'
//     });
// })
// about.addEventListener('click', ()=>{
//     window.scrollBy(100, contianer.offsetHeight); 
//     contianer.scrollIntoView({
//         behavior: 'smooth'
//     });
// })
// about.addEventListener('click', ()=>{
//     window.scrollBy(100, contianer.offsetHeight); 
//     contianer.scrollIntoView({
//         behavior: 'smooth'
//     });
// })


window.addEventListener('scroll', change);
function change(){
    if(window.scrollY > nav.offsetHeight + 150){

        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    if(window.scrollY > contianer.offsetHeight - 200 ){
     contianer.style.opacity = '1';
     contianer.style.gap = '50px';
    }else{
        contianer.style.opacity = '0';
        contianer.style.gap = '70px';

    }
};

