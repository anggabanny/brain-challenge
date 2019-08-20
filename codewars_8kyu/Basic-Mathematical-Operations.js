function basicOp(operation, value1, value2){
    switch (operation) {
        case '+': { return value1 + value2 ;break;}
        case '-': { return value1 - value2 ;break;}
        case '*': { return value1 * value2 ;break;}
        case '/': { return value1 / value2 ;break;}
        default: {return 'tolong input yang bener';break;}
    }
}
console.log(basicOp('+', 4, 7));