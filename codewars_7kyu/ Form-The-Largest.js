function maxNumber(n) {
    //your code here
    var newa = n.toString()
    var newe = newa.split('')
    return Number(newe.sort(function(a,b){return b-a}).join(''));
}
console.log(maxNumber(213));
