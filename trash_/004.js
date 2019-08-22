function deepSum(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0 ; j < arr[i].length; j++){
            for(var k = 0 ; k < arr[i][j].length; k++){
                count+=arr[i][j][k]
            }
        }
    }
    return count
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316