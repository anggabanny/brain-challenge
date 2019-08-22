function slice(arr,x,y) {
    var temp = []
    for(var i = x ; i < arr.length; i++){
        if (i < y) {
            temp.push(arr[i])
        }
    }
    return temp
}
console.log(slice(['a','b','c','d','e','f'],2,4))
