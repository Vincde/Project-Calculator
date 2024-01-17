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

function operate(a,op,b){

    if(op === '+') return add(a,b);
    else if(op === '-') return subtract(a,b);
    else if(op === '*') return multiply(a,b);
    else if(op === '/') return divide(a,b);
}


function displayOutput(){
    const button = document.body.querySelector('.output');
    const ber = document.body.querySelectorAll("button");
    
    for(let i = 0; i < ber.length; i++){
        ber[i].addEventListener('click',(e) =>{
            button.textContent = e.target.textContent;
        });
    }
}

displayOutput();