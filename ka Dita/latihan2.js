function hitungPersentase(arr) {
    var obj = {}
    for(var i = 0 ; i < arr.length; i++){
        if (!obj[arr[i]]) {
            obj[arr[i]] = arr[i]
        } else {
            obj[arr[i]] += arr[i]
        }
    }

    var test =  []
    var gen = {}
    for(var i in obj){
        gen[i] = ((obj[i].length / arr.length) * 100).toFixed(1)
        test.push(gen)
        gen = {}
    }
    
    return test
}

console.log(hitungPersentase(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
// [ {B: 42.8}, {D: 28.6}, {A: 14.3}, {C: 14.3} ]