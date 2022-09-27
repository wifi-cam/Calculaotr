let operator = '';
let currentInput = '';
let lastInput = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbrBtns = document.querySelectorAll('.numBtn');
    const oprtrBtns = document.querySelectorAll('.op');
    const decimalBtn = document.getElementById('decimalBtn');
    const equalBtn = document.getElementById('equalBtn');
    const clearBtn = document.getElementById('clear');
    const deleteBtn = document.getElementById('delete');

    let currentScrn = document.querySelector('.current-input');
    let lastScrn = document.querySelector('.last-input');

    numbrBtns.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        currentScrn.textContent = currentInput;
    }))

    oprtrBtns.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        lastScrn.textContent = lastInput + ' ' + operator;
        currentScrn.textContent = currentInput;
    }))

    clearBtn.addEventListener('click', function(e){
        lastInput = '';
        currentInput = '';
        operator = '';
        currentScrn.textContent = currentInput;
        lastScrn.textContent = lastInput;
    })

})

function handleNumber(num){
    if(currentInput.length <= 7)
    currentInput += num;
}

function handleOperator(op){
    operator = op;
    lastInput = currentInput;
    currentInput = '';
}