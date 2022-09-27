let operator = '';
let currentInput = '';
let lastInput = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbrBtns = document.querySelectorAll('.numBtn');
    const oprtrBtns = document.querySelectorAll('.op');
    const decimalBtn = document.getElementById('decimalBtn');
    const equalBtn = document.getElementById('equalBtn');
    const clearBtn = document.getElementById('clear');
    // const deleteBtn = document.getElementById('delete');

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

    decimalBtn.addEventListener('click', function(e){
        addDecimal()
    })

    clearBtn.addEventListener('click', function(e){
        lastInput = '';
        currentInput = '';
        operator = '';
        currentScrn.textContent = currentInput;
        lastScrn.textContent = lastInput;
    })

    equalBtn.addEventListener('click', function(){
        if(currentInput != '' && lastInput != ''){
            calculate()
            lastScrn.textContent = '';
            if(lastScrn.length <= 8) {
                currentScrn.textContent = lastInput;
            } else{
                currentScrn.textContent = lastInput.slice(0,8) + "...";
            }
        }
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

function addDecimal(){
    if(!currentInput.includes('.')){
        currentInput += '.';
    }
}

function calculate(){
    lastInput = Number(lastInput);
    currentInput = Number(currentInput);

    if(operator === '+'){
        lastInput += currentInput;
    } else if(operator === '-'){
        lastInput -= currentInput;
    } else if(operator === 'x'){
        lastInput *= currentInput;
    } else {
        lastInput /= currentInput;
    }

    lastInput = roundNumber(lastInput);
    lastInput = String(lastInput);
    currentInput = String(lastInput);
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}