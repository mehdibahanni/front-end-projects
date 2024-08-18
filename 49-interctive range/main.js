let range = document.querySelector('input');
let lable = document.querySelector('.range_content');

range.addEventListener('input', e =>{
    const value = +e.target.value
    const lable = +e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyPriority('width')
    const lable_width = getComputedStyle(lable).getPropertyPriority('width')

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_lable = +range_width.substring(0, lable_width.length - 10);

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_lable / 2 + scale(value, min, max, 10, - 10)
    

    
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}