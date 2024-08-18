const clock = document.querySelector('.clock');

clock.addEventListener('load', teck);

function teck(){
    const data = new Date(),
          H = data.getHours(),
          M = data.getMinutes(),
          S = data.getSeconds();

    const time = `
        <span>${H < 9 ? '0' + H: H } : </span>
        <span>${M < 9 ? '0' + M: M } : </span>
        <span>${S < 9 ? '0' + S: S }</span>
        <span>${H > 12 ? 'PM' : 'AM'}</span>
    ` 
    clock.innerHTML = time;
}
setInterval(teck, 1000);