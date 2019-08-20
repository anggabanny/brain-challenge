function passwordGenerator(name) {
    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    }
}

function changeVocals(str) {
    var temp = ''
    for(var  i = 0 ; i < str.length; i++){
        if (str[i] == str[i].toLowerCase()) {
            switch (str[i]) {
                case 'a' : { temp += 'b' ; break;}
                case 'i' : { temp += 'j' ; break;}
                case 'u' : { temp += 'v' ; break;}
                case 'e' : { temp += 'f' ; break;}
                case 'o' : { temp += 'p' ; break;}
                default : { temp+=str[i] ; break;}
            }
        } else if (str[i] == str[i].toUpperCase()){
            switch (str[i]) {
                case 'A' : { temp += 'B' ; break;}
                case 'I' : { temp += 'J' ; break;}
                case 'U' : { temp += 'V' ; break;}
                case 'E' : { temp += 'F' ; break;}
                case 'O' : { temp += 'P' ; break;}
                default : { temp+=str[i] ; break;}
            }
        }
    }
    return temp
}

function reverseWord(str) {
    var split = str.split('').reverse().join('')
    return split
}

function setLowerUpperCase(str) {
    var temp = ''
    for(var i = 0 ; i < str.length; i++){
        if (str[i] == str[i].toLowerCase()) {
            temp+=str[i].toUpperCase()
        } else {
            temp+=str[i].toLowerCase()
        }
    }
    return temp
}

function removeSpaces(str) {
    var output = ''
    for(var i = 0; i < str.length; i++){
        if (str[i] != ' ') {
            output+=str[i]
        }
    }
    return output
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'