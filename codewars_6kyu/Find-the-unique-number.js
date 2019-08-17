function findUniq(arr) {
    var temp = []
    for(var i = 0; i < arr.length; i ++){
        if (temp.indexOf(arr[i]) == -1) {
            temp.push(arr[i])
        }
    }

    var final = []
    for(var j = 0; j < temp.length; j++){
        var output = []
        var count = 0;
        for(var k = 0; k < arr.length; k++){
            if (temp[j] == arr[k]) {
                count++
            }
        }
        output.push(temp[j])
        output.push(count)
        final.push(output)
    }

    for(var i = 0; i < final.length; i++){
        for(var j = 0; j < final.length-1; j++){
            if (final[j][1] > final[j+1][1]) {
                var temp1 = final[j]
                final[j] = final[j+1]
                final[j+1] = temp1
            }
        }
    }
    return final[0][0]
}

console.log(findUniq([ 0, 1, 0 ]));