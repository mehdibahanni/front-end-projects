let tegglet = document.querySelector('#switch');

tegglet.addEventListener( 'click', ()=>{
    tegglet.checked === true 
    ?  document.body.style.background = 'black'
    : document.body.style.background = 'var(--primary-color)'
})