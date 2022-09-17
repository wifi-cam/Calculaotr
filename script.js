let operator = '';
let currentInput = '';
let lastInput = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbrBtns = document.querySelectorAll('.numBtn');
    const oprtrBtns = document.querySelectorAll('[data-operator]');
    const decimalBtn = document.getElementById('decimalBtn');
    const equalBtn = document.getElementById('equalBtn');
    const clearBtn = document.getElementById('clear');
    const deleteBtn = document.getElementById('delete');

    let currentScrn = document.querySelector('.current-input');
    let lastScrn = document.querySelector('.last-input');

    numbrBtns.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        currentScrn.textContent = currentInput;
    }) )
})

function handleNumber(num){
    currentInput += num;
}