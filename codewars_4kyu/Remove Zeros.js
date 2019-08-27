function removeZeros(array) {
    var nonZero = []
    var zero = []
    for(var i = 0 ; i < array.length; i++){
        if (array[i] == 0  && array[i] !== false) {
            zero.push(array[i])
        } else {
            nonZero.push(array[i])
        }
    }

    for(var i = 0 ; i < zero.length; i++){
        nonZero.push(zero[i])
    }

    return nonZero
}

function removeZeros(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == 0 && array[i] !== false) {
            for (var j = i; j < array.length - 1; j++) {
                if (array[j + 1] != 0 || array[j + 1] === false) {
                    var temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
console.log(removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]));
