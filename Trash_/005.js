function digitPerkalianMinimum(angka) {
    var dapet = []

    for(var i = 1; i <= angka; i++){
        for(var j = 0; j <= angka; j++){
            if (i * j == angka) {
                var dapat = String(i) + String(j)
                dapet.push(dapat)
            }
        }
    }
    console.log(dapet);

    var temp = dapet[0].length
    for(var i = 0 ; i < dapet.length; i++){
        if (dapet[i].length < temp) {
            temp = dapet[i].length
        }
    }
    return temp
}

// TEST CASES
console.log(digitPerkalianMinimum(22)); // 2