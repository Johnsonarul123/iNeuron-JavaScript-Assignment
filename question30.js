// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

//for calculator there are 4 operators +,-,*,/
//we need a variable for input , a variable for output and a variable for operator 
// can be made using either if else or switch but let's implement using if else 

let v1= 10;
let operator = "/";
let v2 = 20;

function calculator(v1,operator,v2){
    if(operator == "+"){
        console.log(`${v1} + ${v2} =`, v1 + v2 );
    }
    else if(operator == "-") {
        console.log(`${v1} - ${v2} =`, v1 - v2 );
    }
    else if(operator == "*") {
        console.log(`${v1} * ${v2} =`, v1 * v2 );
    }
    else if(operator == "/") {
        console.log(`${v1} / ${v2} =`, v1 / v2 );
    }
    else{
        console.log("Please enter a valid operator")
    }
}

calculator(v1,operator,v2)