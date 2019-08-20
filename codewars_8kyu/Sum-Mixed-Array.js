function sumMix(x){
    var total = 0;
    for(var i = 0 ; i < x.length; i++){
        total += Number(x[i])
    }
    return total
}
console.log(sumMix([9, 3, '7', '3']));
