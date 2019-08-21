function reverse(str) {
    if (str[0] == ' ') {
        return ''
    }
    str = str.split(' ')
    console.log(str);
    for(var i = 0 ; i < str.length; i++){
        if (i % 2 === 1) {
            str[i] = str[i].split('').reverse().join('')
        }
    }
    return str.join(' ')
}

// console.log(reverse("Reverse this string, please!"));
console.log(reverse(""));
