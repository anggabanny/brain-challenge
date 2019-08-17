var countSheep = function (num) {
    //your code here
    var string = ''
    for(var i = 1; i <= num; i++){
        string+= i + ' sheep...'
    }
    return string
}

console.log(countSheep(6));
