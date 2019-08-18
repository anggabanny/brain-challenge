function cariModus(arr) {
    var countResmi = 0
    var angkaResmi = 0
    var checkNum = 0

    for(var i = 0; i < arr.length; i++){
        var countSementara = 0
        for(var j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                countSementara++
            } else {
                checkNum++
            }
        }
        if (countSementara > countResmi) {
            countResmi = countSementara
            angkaResmi = arr[i]
        }
    }

    if (countResmi == 1 || checkNum == 0) {
        return -1
    } else {
        return angkaResmi
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1