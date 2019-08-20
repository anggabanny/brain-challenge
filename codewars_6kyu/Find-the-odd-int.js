function findOdd(A) {
    var asli = 0
    for(var i = 0 ; i < A.length; i++){
        var count = 0
        for(var j = 0 ; j < A.length; j++){
            if (A[i] == A[j]) {
                count++
            }
        }
        if (count % 2 == 1) {
            asli = A[i]
        }
    }
    return asli
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
