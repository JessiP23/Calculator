const resultText = document.getElementsByClassName("result")[0];//Returns an array of elements with the class name.such as this is an array, and it says elements we just have one element with the class name of result. So, we write 0 as the first element

let storedValue = null;//takes the number and saves it 
let operator = null; //once we type the operation and then another number, the operator will be switched
function numberPressed(number){
    if(number === '.'){
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes("."))
            return; 
    }
    resultText.innerHTML += number.toString();//this is because we dont want to add the numbers instead, places the strings together
}

function canOperate(){
    return resultText.innerHTML.length >= 1;
}

function operate(number){
    let result;
    switch(operator){
        case "+":
            result = storedValue + number;
            break;
        case "-":
            result = storedValue - number;
            break;
        case "*":
            result = storedValue * number;
            break;
        case "/":
            result = storedValue / number;
            break;
    }
    resultText.innerHTML = result;
    storedValue = null;
    operator = null;
}

function operationSolved(operation){
    const number = parseFloat(resultText.innerHTML);

    if(!canOperate()) return;

    if(operation === "=" && storedValue !== null){
        return operate(number);
    }else if(operation === "c"){
        storedValue = null;
        operator = null;//once i clean the calculator dont want to use those numbers again
    }else{
        operator = operation;
        storedValue = number;
    }
    resultText.innerHTML = "";
    //whether pressing c or any other sign it is likely to clean the calculator to input another value
}