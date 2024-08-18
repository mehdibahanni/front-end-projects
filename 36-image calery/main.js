
let wrapper  = document.querySelector('.wrapper'),
    wrapperIamge = document.querySelector('.wrapper img')
    closeBtn = document.querySelector('.wrapper .close-btn'),
    img = document.querySelectorAll('.Gallery img');

closeBtn.addEventListener("click", ()=> wrapper.style.display = 'none');

img.forEach((element ,index) => {
    element.addEventListener('click',()=>{
        showImg(`/42-image calery/images/Img${index +1}.jpg`)
    });
});

function showImg(pic){
    wrapper.style.display = 'flex';
    wrapperIamge.src = pic;
};