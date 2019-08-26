function persistence(num) {
    //code me
    if (num < 10) {
        return 0
    }
    count = 1
    while(true) {
        num = num.toString()
        var temp = 1
        for(var i = 0 ; i < num.length; i++){
            temp = temp * Number(num[i])
        }

        if (temp < 10) {
            return count
        } else {
            count++
            num = temp
        }
    }
}
console.log(persistence(39));
// console.log(persistence(999));
