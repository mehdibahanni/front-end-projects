const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
   move(event.pageX, event.pageY);
   console.log(event.pageX, event.pageY)
})



function move(pageX , pageY){
    cursor.style.left = pageX + 'px';
    cursor.style.top = pageY + 'px';
}
console.log(cursor)