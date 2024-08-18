let button = document.querySelectorAll('.btn');

button.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let number = btn.value;
        changeColor(number);
    });
});

let body = document.body;

function changeColor(color){
    body.classList = '';

    switch(color){
        case 'purple' : 
        body.classList = 'purple';
        break;
        case 'blue' : 
        body.classList = 'blue';
        break;
        case 'red' : 
        body.classList = 'red';
        break;
        case 'green' : 
        body.classList = 'green';
        break;
        case 'yellow' : 
        body.classList = 'yellow';
        break;
        case 'teal' : 
        body.classList = 'teal';
        break;
    }
}