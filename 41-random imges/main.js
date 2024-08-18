const contianer = document.querySelector('.contianer'),
      url = 'https://source.unsplash.com/random/',
      rows = 3;
for(let i = 0 ; i < rows * 3 ; i++ ){
    Image = document.createElement('img');
    Image.src = `${url}${randomSize()}`;
    contianer.appendChild(Image);
}


function randomSize(){
    return `${randomNUmber()}x${randomNUmber()}`;
}
function randomNUmber(){
    return Math.floor(Math.random() * 13 + 300); 
}
