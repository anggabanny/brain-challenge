function multiplicationTable(row, col) {
    var temp = []
    for(var i = 1 ; i <= row; i++){
        var tempS = []
        for(var j = 1; j <= col; j++){
            tempS.push(i*j)
        }
        temp.push(tempS)
    }
    return temp
}
console.log(multiplicationTable(3,3));
