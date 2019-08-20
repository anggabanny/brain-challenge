function validParentheses(parens) {
    var temp = []
    for(var i = 0; i < parens.length; i ++){
        if (parens[i] == '(') {
            temp.push(parens[i])
        } else if (parens[i] == ')' && temp.length !== 0){
            temp.pop()
        } else if (parens[i] == ')' && temp.length == 0){
            return false
        }
    }

    if (temp.length == 0) {
        return true
    } else {
        return false
    }
}
console.log(validParentheses( "()" ));
console.log(validParentheses( "())" ));