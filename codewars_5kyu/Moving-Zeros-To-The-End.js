var moveZeros = function (arr) {

    var temp1 = [];
    for(var i = 0 ; i < arr.length; i++){
        if (arr[i] !== 0) {
            temp1.push(arr[i])
        }
    }
    
    for(var j = 0; j < arr.length; j++){
        if (arr[j] === 0) {
                temp1.push(arr[j])
        }
    }
    return temp1
}
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));

