function stringTransformer(str) {

    var temp = []
    for(var i = 0; i < str.length; i++){
        if (str[i] == str[i].toLowerCase()) {
            temp.push(str[i].toUpperCase())
        } else
            temp.push(str[i].toLowerCase())
    }
    var x = temp.join('')
    return x.split(' ').reverse().join(' ');
}
console.log(stringTransformer('Example string'));
