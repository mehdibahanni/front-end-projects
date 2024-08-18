function gettabe(element){
    let active = document.querySelector('.active');
    let visible = document.querySelector('.content-visible');
    let tabContent = document.getElementById(element.href.split("#")[1]);

    active.classList.toggle('active');
    visible.classList.toggle('content-visible');

    element.classList.add("active");
    tabContent.classList.add("content-visible");
}

document.addEventListener('click',(el)=>{
    if(el.target.matches(".tab-item a")){
        gettabe(el.target)
    }
});
let item = document.querySelector('a');
let tabContent = document.getElementById(item.href.split("#")[1]);
console.log(tabContent);