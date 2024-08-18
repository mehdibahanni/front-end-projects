let inner = document.querySelector('.inner-cursor');
let outer = document.querySelector('.outer-cursor');

window.addEventListener('mousemove', moveMouse);
function moveMouse(e){

    if(e){
        inner.style.display = 'block';
        outer.style.display = 'block';
    }

    const X = e.clientX
    const Y = e.clientY

    inner.style.left = `${X}px`;
    inner.style.top = `${Y}px`;

    outer.style.left = `${X}px`;
    outer.style.top = `${Y}px`;
}