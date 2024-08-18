
let accordin_hd = document.querySelectorAll('.accordin-header');

accordin_hd.forEach((accordin)=>{
    accordin.addEventListener("click",  collapseAccrodions);
    
    function collapseAccrodions(){
        const acitveAccordin = document.querySelector('.active');
        if (acitveAccordin && acitveAccordin !== accordin){
            acitveAccordin.classList.toggle("active");
            acitveAccordin.nextElementSibling.style.maxHeight = 0;
        }
        accordin.classList.toggle("active");
        const accordinItemBody = accordin.nextElementSibling;
        if(accordin.classList.contains('active')){
            accordinItemBody.style.maxHeight = accordinItemBody.scrollHeight + "px";
        }else{
            accordinItemBody.style.maxHeight = 0;
        }
    }

})