let insert = document.querySelector('#insert');


window.addEventListener('keydown', (events)=>{
    console.log(events.key)
    console.log(events.keyCode)
    console.log(events.Code)
   
    insert.innerHTML = `
    <div class="fa-key">
        ${ events.key === " " ? "space" : events.key}
        <small>evnets.key</small>
    </div>
    <div class="fa-key">
        <small>events.key</small>
        ${events.keyCode}
    </div>
    <div class="fa-key">
        <small>events.code</small>
        ${events.code}
    </div>
    `
});