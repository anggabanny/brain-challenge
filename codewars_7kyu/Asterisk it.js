function asteriscIt(n) {
    n = n.toString()
    var temp = ''
    for(var i = 0 ; i < n.length; i++ ){
        if (n[i] == ',') {
            
        } else {
            temp+=n[i]
        }
    }
    var output = ''
    for(var i = 0 ; i < temp.length; i++){
        if (Number(temp[i]) % 2 == 0 && Number(temp[i+1]) % 2 == 0) {
            output += temp[i] + '*'
        } else {
            output += temp[i]
        }
    }
    return output
};
console.log(asteriscIt('1,4,64,68,67,23,1'));
