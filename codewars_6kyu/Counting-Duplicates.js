function duplicateCount(text) {
    var ext = text.toLowerCase().split('')

    var check = []
    for(var i = 0; i < ext.length; i++){
        if (check.indexOf(ext[i]) == -1) {
            check.push(ext[i])
        }
    }

    var output = []
    for(var i = 0; i < check.length; i++){
        var count = 0;
        for(var j = 0; j < ext.length; j++){
            if (check[i] == ext[j]) {
                count++
            }
        }
        output.push([check[i],count])
    }
    
    var number = 0
    for(var i = 0; i < output.length; i++){
        console.log(output[i]);
        if (output[i][1] > 1) {
            number++
        }
    }
    return number
}

console.log(duplicateCount('indivisibility'));