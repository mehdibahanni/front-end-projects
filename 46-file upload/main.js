let close   = document.querySelector('.close'),
    img     = document.querySelector('img'),
    upload  = document.querySelector('input');


upload.addEventListener('change', (event)=>{
    console.log(event)
    change(event);
})

function change(event){
    close.classList.add('exit');
    img.classList.toggle('active');
    img.src = URL.createObjectURL(event.target.files[0]);

    close.addEventListener('click', ()=>{
        img.classList.toggle('active');
        close.classList.toggle('exit');
    });
}