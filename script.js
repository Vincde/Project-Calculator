function add(a, b){
    if((a + b) % 1 === 0){
    return a + b;
    }else return Math.round((a + b) * 100)/100;
}

function subtract(a,b){
    if((a - b) % 1 === 0){
        return a - b;
        }else return Math.round((a - b) * 100)/100;
}

function multiply(a,b){
    if((a * b) % 1 === 0){
        return a * b;
        }else return Math.round((a * b) * 100)/100;
}

function divide(a,b){
    if(b === 0){
        return 'There is an error! you are trying to divide by zero!';
    }
    if((a / b) % 1 === 0){
        return a / b;
        }else return Math.round((a / b) * 100)/100;
}

function operate(str){
    let a,b,op;
    let variablesArray = str.split(' ');
    let i = 0;
    let res;

    while(i <= variablesArray.length - 2){
    a = variablesArray[i];
    b = variablesArray[i+2];
    op = variablesArray[i+1];
    

    if(isPossible(a,b,op)){
        a = +a;
        b = +b;
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
    

    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click',(e) =>{
            output.textContent += e.target.textContent;
        });
    }


    
    addFloatingButton(output);
    addResultButton(output);
    addClearButton(output);
    addBackspaceButton(output);
    addKeyboardSupport(output);
}

function isPossible(a,b,op){

    if (Number.isNaN(a) || 
    Number.isNaN(b) ||
    ((typeof op) != 'string') ||
    a === '' ||
    b === '')
    return false;
    else return true;
}

function addClearButton(output){
    const clear = document.querySelector('.clear');
    const floatingPoint = document.querySelector('#float');
    
    clear.addEventListener('click',() =>{
        output.textContent = '';
        output.innerHTML = '';
    });
}


function addResultButton(output){
    const result = document.querySelector('.result');

    result.addEventListener('click',() =>{
        let str = output.textContent;
        if(str === '' || str.length < 5){ 
            output.textContent = '';
            output.innerHTML = '';
        }
        else{
            output.textContent = operate(str);
        }
    });
}

function addFloatingButton(output){
    const floatingPoint = document.querySelector('#float');

    floatingPoint.addEventListener('click',function floatingEvent(e){
        if(output.textContent.includes('.')) return;
        output.textContent += e.target.textContent;
    });

}

function addBackspaceButton(output){
    const backspace = document.querySelector('#backspace');

    backspace.addEventListener('click',() =>{
        let str = output.textContent;
        output.textContent = str.substring(0,str.length - 1);
        str = output.textContent;
    });
}


function addKeyboardSupport(output){   
    let arr = ['0','1','2','3','4','5','6','7','8','9','.'];
    document.addEventListener('keydown',(e) =>{

        if(output.textContent.includes('.')) arr.pop();


        if(e.ctrlKey && e.key === 'c'){
            output.textContent = '';
            output.innerHTML = '';
        }
        

        
        if(e.shiftKey && e.key === '='){
            
            output.textContent = operate(output.textContent);
        }
        else if(e.key === 'Backspace'){
        let str = output.textContent;
        output.textContent = str.substring(0,str.length - 1);
        str = output.textContent;
        }
        else if(e.shiftKey){
            if(e.key === '*' || e.key === '/'){
                output.textContent += ' ' + e.key + ' ';
            }
            else if(arr.includes(e.key)){
                output.textContent += e.key;
            }
        }else{
            if(e.key === '+' || e.key === '-'){
                output.textContent += ' ' + e.key + ' ';
            } 
            else if(arr.includes(e.key)){
                output.textContent += e.key;
            }
        }
                
    });
    
}


displayOutput();
