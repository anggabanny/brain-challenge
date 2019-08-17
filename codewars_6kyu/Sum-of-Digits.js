function digital_root(n) {
    while (true) {
        var nBAru = n;
        var check = nBAru.toString()

        if (check.length == 1) {
            return Number(check)
        } else {
            var temp = 0;
            for(var i = 0 ; i < check.length; i++){
                temp += Number(check[i])
            }
            if (temp.toString().length == 1) {
                return temp
            }
            n = temp
        }
    }
}

console.log(digital_root(1))
console.log(digital_root(16))
console.log(digital_root(456))