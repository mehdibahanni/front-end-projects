var input = document.getElementById("input");

input.onfocus = function (){
    // if
    this.removeAttribute('placeholder');
}
input.onblur = function(){
    this.setAttribute('placeholder', "search")
}