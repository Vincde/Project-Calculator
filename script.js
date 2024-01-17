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
    let i = 0;
    let res;

    while(i <= variablesArray.length - 2){
    a = +variablesArray[i];
    b = +variablesArray[i+2];
    op = variablesArray[i+1];
    

    if(isPossible(a,b,op)){
        switch(op){
            case '+':
                res = add(a,b);
                variablesArray[i+2] = res;
                break;
                
            
            case '-':
                res = subtract(a,b);
                variablesArray[i+2] = res;
                break;
                
            case '*':
                res = multiply(a,b);
                variablesArray[i+2] = res;
                break;

            case '/':
                res = divide(a,b);
                variablesArray[i+2] = res;
                break;    
            }
        }
        
        else{

         return 'Error!,Clear and retry';
        }
        i += 2;
    }

    return res;
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
        output.innerHTML = '';
    });

    result.addEventListener('click',() =>{
        let str = output.textContent;
        if(str === null || str === undefined || str === ''){ 
            output.textContent = '';
            output.innerHTML = ''
        }
        else{
            output.textContent = operate(str);
        }
    });




}

function isPossible(a,b,op){
    if(typeof a != 'number' || typeof b  != 'number') return false;
    else if( typeof op != 'string') return false;
    else return true;
}

displayOutput();