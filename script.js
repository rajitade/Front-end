// Version Three Script
const text = document.getElementById('text');
const changeBtn = document.getElementById('changeBtn');
const resetBtn = document.getElementById('resetBtn');

changeBtn.addEventListener('click', () => {
    text.textContent = "You clicked the button!";
    text.style.color = "blue";
});

resetBtn.addEventListener('click', () => {
    text.textContent = "Hello World!";
    text.style.color = "black";
});