// Version Two Script
const btn = document.getElementById('changeBtn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = "You clicked the button!";
    text.style.color = "blue";
});