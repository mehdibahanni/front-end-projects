let boxs = document.querySelectorAll('.box');

boxs.forEach((box)=>{
    box.addEventListener('click', (e)=>{
        let color = e.target.id;
        document.body.style.backgroundColor = color;
    })
});