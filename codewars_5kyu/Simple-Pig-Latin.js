function pigIt(str) {
    var input = []
    var temp = []
    for(var i = 0; i < str.length; i++){
        if(str[i] == ' '){
            input.push(temp)
            temp = []
        } else{
            temp.push(str[i])
        }
    }
    input.push(temp)
    
    for(var i = 0; i < input.length; i++){
        if (input[i].length > 1 && (input[i] != '!' || input[i] != '?' || input[i] != '#' || input[i] != '$')) {
            input[i].push(input[i][0]+'ay')
            input[i] = input[i].slice(1)
            input[i] = input[i].join('')
        }
    }
    return input.join(' ')
}
console.log(pigIt('O tempora o mores !'));
