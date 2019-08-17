function reverseWords(str) {
    // Go for it
    var checkStr = false

    for(var i = 0; i < str.length; i++){
        if (str[i] == ' ') {
            checkStr = true
        }
    }
    
    if (checkStr == false) {
        return str.split('').reverse().join('')
    } else if (checkStr == true) {
        var strN = str.split(' ')
        var output = []
        for(var i = 0; i < strN.length; i++){
            output.push(strN[i].split('').reverse().join(''))
        }
        
        return output.join(' ')
    }
}
console.log(reverseWords('double'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
