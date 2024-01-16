function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(str){
    
    let arr;
    arr = str.split(' ');

    let a = +arr[0];
    let b = +arr[2];

    let op = arr[1];

    if(op === '+') return add(a,b);
    else if(op === '-') return subtract(a,b);
    else if(op === '*') return multiply(a,b);
    else if(op === '/') return divide(a,b);
}

function displayOutput(){
    const outputButton = document.querySelector('.output');
    
    const variable = document.querySelector('button');
    
    variable.addEventListener('click',(e) =>{
        outputButton.value = e.value;
    });

    const result = document.querySelector('.result');
    
    result.addEventListener('click',(e) =>{
        let variableResult = operate(outputButton.value);
        outputButton.value = variableResult;
    });

    const clearButton = document.querySelector('.clearButton');
    clearButton.addEventListener('click',() =>{
       outputButton.value = '';
    });
    /* outputButton.value = 'aaaaaaaa'; */
}

displayOutput();