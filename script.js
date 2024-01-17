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
    let a,b,op;
    let variablesArray = str.split(' ');
    /* for(let i = 0; i < variablesArray.length ; i++){

    } */

    a = +variablesArray[0];
    b = +variablesArray[2];
    op = variablesArray[1];

    if(op === '+') return add(a,b);
    else if(op === '-') return subtract(a,b);
    else if(op === '*') return multiply(a,b);
    else if(op === '/') return divide(a,b);
}


function displayOutput(){
    const output = document.querySelector('.output');
    const numbers = document.querySelectorAll(".numbers, .op");
    const result = document.querySelector('.result');
    const clear = document.querySelector('.clear');


    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click',(e) =>{
            output.textContent += e.target.textContent;
        });
    }

    clear.addEventListener('click',() =>{
        output.textContent = '';
    });

    result.addEventListener('click',() =>{
        let str = output.textContent;
        if(str === null || str === undefined) output.textContent = '';
        else{
            output.textContent = operate(str);
        }
    });




}

displayOutput();