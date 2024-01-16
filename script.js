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

function calculator(str){
    
    let arr;
    arr = str.split(' ');

    let a = +arr[0];
    let b = +arr[2];

    let op = arr[1];

    if(op === '+') return add(a,b);
    else if(op === '-') return subtract(a,b);
    else if(op === '*') return multiply(a,b);
    else if(op === '/') return multiply(a,b);
}