let emoji = document.querySelector('#emoji');
const emojies = [
    "😂",
    "🤣",
    "❤",
    "😍",
    "😒",
    "👌",
    "😘",
    "💕",
    "😁",
    "👍",
    "🙌",
    "🤦‍♀️",
];
emoji.addEventListener('mouseover', ()=>{
    emoji.innerHTML = emojies[Math.floor(Math.random() * emojies.length)]
})

